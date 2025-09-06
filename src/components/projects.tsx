import { ProjectCard } from "./project-card";

const projects = [
  {
    title: 'GradX',
    initialDescription: 'A degree planning web app for Waterloo students with drag-and-drop scheduling, prerequisite checks, and real-time conflict detection.',
    link: 'https://github.com/Zareef09/GradX',
    tags: ['FastAPI', 'PostgreSQL', 'React'],
  },
  {
    title: 'AI Course Recommender',
    initialDescription: 'ML-powered course recommender that suggests courses and detects cross-listed equivalences, refined with user feedback.',
    link: 'https://github.com/Zareef09/AI-course-recommender-',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'scikit-learn'],
  },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
    {children}
    <span className="block w-24 h-1 bg-primary mx-auto mt-4 rounded-full [box-shadow:0_0_12px_hsl(var(--primary))]"></span>
  </h2>
);

export default function Projects() {
  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
