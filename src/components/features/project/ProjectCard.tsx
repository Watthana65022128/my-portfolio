"use client";

import { Project } from "@/types";
import Card, { CardContent, CardFooter } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-t-lg -m-6 mb-4">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <svg
            className="w-16 h-16"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        {project.featured && (
          <Badge
            variant="success"
            className="absolute top-4 right-4"
          >
            Featured
          </Badge>
        )}
      </div>

      <CardContent className="flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="secondary">
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
            Live Demo
          </Button>
        )}
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            GitHub
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
