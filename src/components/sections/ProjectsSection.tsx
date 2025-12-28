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
    : projects.filter((project) => 
        Array.isArray(project.category) 
          ? project.category.includes(selectedCategory)
          : project.category === selectedCategory
      );

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <h2 className="heading-secondary text-center mb-4">Featured Projects</h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />

        {/* Filter */}
        <ProjectFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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
