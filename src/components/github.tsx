import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowUpRight, GithubIcon } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
    {children}
    <span className="block w-24 h-1 bg-primary mx-auto mt-4 rounded-full [box-shadow:0_0_12px_hsl(var(--primary))]"></span>
  </h2>
);

export default function Github() {
  return (
    <div className="text-center flex flex-col items-center">
      <SectionTitle>Explore My Code</SectionTitle>
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30"></div>
        <GithubIcon
            className="w-24 h-24 text-foreground transition-colors duration-300 hover:text-primary [filter:drop-shadow(0_0_8px_currentColor)]"
        />
      </div>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
        Dive into my repositories to see how I design scalable backends, build modern React dashboards, and experiment with AI/ML applications.
      </p>
      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-7 px-8 rounded-full font-bold transition-all duration-300 transform hover:scale-105 [box-shadow:0_0_20px_hsl(var(--accent)/50%)]">
        <Link href="https://github.com/Zareef09" target="_blank">
          Visit My GitHub <ArrowUpRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
    </div>
  );
}
