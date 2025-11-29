"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/features/project/ProjectCard";
import ProjectFilter from "@/components/features/project/ProjectFilter";
import { ProjectCategory } from "@/types";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="section-container">
        <h2 className="heading-secondary text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience
        </p>

        {/* Filter */}
        <ProjectFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
