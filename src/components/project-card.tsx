"use client"

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  initialDescription: string;
  link: string;
  tags: string[];
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group bg-card/50 backdrop-blur-sm border-border overflow-hidden transition-all duration-300 hover:border-primary hover:[box-shadow:0_0_20px_hsl(var(--primary)/20%)] flex flex-col">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-foreground/80">{project.initialDescription}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent">
          <Link href={project.link} target="_blank">View Project <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
