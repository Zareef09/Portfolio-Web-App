import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, Briefcase, Wrench, BrainCircuit, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
    {children}
    <span className="block w-24 h-1 bg-primary mx-auto mt-4 rounded-full [box-shadow:0_0_12px_hsl(var(--primary))]"></span>
  </h2>
);

const GlowIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
  <div className="p-3 bg-primary/10 rounded-full">
    <Icon className="w-8 h-8 text-primary [filter:drop-shadow(0_0_4px_hsl(var(--primary)))]" />
  </div>
);

const skills = [
    "C++", "CSS", "Docker", "FastAPI", "GCP", "HTML", "JavaScript", "Node.js", 
    "PostgreSQL", "Python", "R", "Racket", "React", "SQL", "scikit-learn", 
    "Tailwind CSS", "TypeScript"
];

const experiences = [
    {
        role: "Software Developer Intern",
        company: "Spectrum Software and Consulting Ltd",
        date: "Sept 2025 – Present"
    },
    {
        role: "Information Technology Analyst",
        company: "City of Cambridge",
        date: "Jan – Apr 2025"
    },
    {
        role: "Software Engineering Intern",
        company: "AMZ Solutions",
        date: "May – Jul 2024"
    }
]

export default function About() {
  return (
    <div>
      <SectionTitle>About Me</SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="col-span-1 lg:col-span-3 bg-card/50 backdrop-blur-sm border-border transition-all duration-300 hover:border-primary hover:[box-shadow:0_0_20px_hsl(var(--primary)/20%)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <GlowIcon icon={BrainCircuit} />
              <span className="text-2xl font-headline">Who am I?</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-lg text-foreground/80">
             <p>Hi, I am Zareef. I study computational mathematics at the University of Waterloo. I enjoy working with people who share the same passion as me in AI/ML and software development. My professional software experience at Spectrum Software and AMZ Solutions, coupled with my role as an IT analyst at the City of Cambridge, involved creating HR dashboards, authentication systems, and business intelligence pipelines for municipal IT infrastructure. My professional experience has taught me to link advanced technical skills with actual real-world outcomes. I spend my leisure time nowadays mainly researching, with a heavy interest in incorporating AI into small businesses.</p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1 bg-card/50 backdrop-blur-sm border-border transition-all duration-300 hover:border-primary hover:[box-shadow:0_0_20px_hsl(var(--primary)/20%)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <GlowIcon icon={School} />
              <span className="text-2xl font-headline">Education</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <h3 className="font-bold text-lg">Bachelor of Mathematics in Computational Mathematics</h3>
            <p className="text-muted-foreground">University of Waterloo, Expected 2028</p>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-border transition-all duration-300 hover:border-primary hover:[box-shadow:0_0_20px_hsl(var(--primary)/20%)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <GlowIcon icon={Briefcase} />
              <span className="text-2xl font-headline">Experience</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {experiences.map(exp => (
                <div key={exp.company}>
                    <h3 className="font-bold text-lg">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company} | {exp.date}</p>
                </div>
            ))}
            <Button asChild variant="outline" className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:border-accent">
                <Link href="https://drive.google.com/file/d/1GdXl1DK2mgMiPAl2KSNc-hJweOLIellw/view?usp=sharing" target="_blank">
                    View Full Resume <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3 bg-card/50 backdrop-blur-sm border-border transition-all duration-300 hover:border-primary hover:[box-shadow:0_0_20px_hsl(var(--primary)/20%)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-4">
              <GlowIcon icon={Wrench} />
              <span className="text-2xl font-headline">Skills</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-md py-1 px-3 bg-primary/10 text-primary border border-primary/20 cursor-pointer transition-all hover:bg-primary/20 hover:border-primary/50">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
