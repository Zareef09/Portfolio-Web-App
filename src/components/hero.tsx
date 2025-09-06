import Particles from '@/components/particles';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowDown, Download } from 'lucide-react';
import TextScramble from './text-scramble';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <Particles className="absolute inset-0 -z-10" />
      <div className="z-10 flex flex-col items-center gap-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-foreground tracking-tighter
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <TextScramble text="Zareef Yeasin Zaman" />
        </h1>
        <p
          className="text-xl md:text-2xl font-medium text-primary"
        >
          <TextScramble text="Computational Mathematics Student @ University of Waterloo" />
        </p>
        <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-7 px-8 rounded-full font-bold transition-all duration-300 transform hover:scale-105 [box-shadow:0_0_20px_hsl(var(--primary)/50%)]">
            <Link href="https://drive.google.com/file/d/1GdXl1DK2mgMiPAl2KSNc-hJweOLIellw/view?usp=sharing" target="_blank">
                Resume <Download className="ml-2 w-5 h-5" />
            </Link>
        </Button>
      </div>
      <Link href="#about" aria-label="Scroll to about section" className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="w-8 h-8 text-primary animate-bounce [filter:drop-shadow(0_0_5px_hsl(var(--primary)))]"/>
      </Link>
    </section>
  );
}
