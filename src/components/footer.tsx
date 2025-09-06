import Link from 'next/link';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Footer() {
  const currentYear = 2025;
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Zareef09' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/zareefyeasinzaman' },
    { name: 'Resume', icon: FileText, href: 'https://drive.google.com/file/d/1GdXl1DK2mgMiPAl2KSNc-hJweOLIellw/view?usp=sharing' },
  ];
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="relative container mx-auto px-4 md:px-6 py-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent [filter:blur(2px)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-primary"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="#home" className="flex items-center gap-2 text-xl font-headline font-bold text-primary [text-shadow:0_0_8px_hsl(var(--primary))]">
            Zareef Y. Zaman
          </Link>

          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-foreground/80 transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link key={social.name} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} aria-label={social.name} className="text-foreground/60 hover:text-primary transition-colors">
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-foreground/60">
          <p>Designed & Built by Zareef Yeasin Zaman | &copy; {currentYear}</p>
          <a href="mailto:zyzaman@uwaterloo.ca" className="mt-2 text-sm inline-flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="w-4 h-4" /> zyzaman@uwaterloo.ca
          </a>
        </div>
      </div>
    </footer>
  );
}
