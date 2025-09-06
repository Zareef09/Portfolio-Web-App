"use client"

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

const TextScramble = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);
  const fx_ref = useRef<any>(null); // To hold the ScrambleFx instance

  useEffect(() => {
    class ScrambleFx {
      el: HTMLElement;
      chars: string;
      frame: number;
      frameRequest: number | null;
      queue: { from: string; to: string; start: number; end: number; char?: string; }[];
      resolve: () => void;
      
      constructor(el: HTMLElement) {
        this.el = el;
        this.chars = CHARS;
        this.frame = 0;
        this.frameRequest = null;
        this.queue = [];
        this.resolve = () => {};

        this.update = this.update.bind(this);
      }

      setText(newText: string) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise<void>(resolve => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || '';
          const to = newText[i] || '';
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        if (this.frameRequest) {
          cancelAnimationFrame(this.frameRequest);
        }
        this.frame = 0;
        this.update();
        return promise;
      }

      update() {
        let output = '';
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="text-primary/50">${char}</span>`;
          } else {
            output += from;
          }
        }
        // Using setDisplayText to update React state
        setDisplayText(output);
        
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    const el = document.createElement('div'); // Create a dummy element
    fx_ref.current = new ScrambleFx(el);
    fx_ref.current.setText(text);

    return () => {
      if (fx_ref.current && fx_ref.current.frameRequest) {
        cancelAnimationFrame(fx_ref.current.frameRequest);
      }
    };
  }, [text]);

  return (
    <span
      className={cn(className)}
      dangerouslySetInnerHTML={{ __html: displayText }}
    />
  );
};

export default TextScramble;
