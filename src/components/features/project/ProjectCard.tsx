"use client";

import { Project } from "@/types";
import Card, { CardContent, CardFooter } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "mobile":
      return (
        <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "backend":
      return (
        <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      );
    case "fullstack":
      return (
        <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case "web":
    case "frontend":
      return (
        <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    default:
      return (
        <svg className="w-16 h-16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
  }
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover glow className="flex flex-col h-full group">
      {/* Icon Header - Minimalist with cyan accent */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-xl -m-6 mb-4 overflow-hidden border-b border-border/30">
        <div className="absolute inset-0 flex items-center justify-center text-primary/30 transition-all duration-300 group-hover:text-primary/50 group-hover:scale-105">
          {getCategoryIcon(project.category)}
        </div>
        {project.featured && (
          <Badge
            variant="primary"
            className="absolute top-4 right-4"
          >
            Featured
          </Badge>
        )}
        <div className="absolute bottom-4 left-4">
          <Badge variant="outline" className="backdrop-blur-sm bg-background/50 capitalize">
            {project.category}
          </Badge>
        </div>
      </div>

      <CardContent className="flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 tracking-tight group-hover:text-primary transition-colors duration-200">{project.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="default">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      {/* Links */}
      <CardFooter>
        {project.liveUrl && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            View Live
          </Button>
        )}
        {project.githubUrl && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            Source Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
