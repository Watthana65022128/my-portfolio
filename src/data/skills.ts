import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React", category: "frontend", },
      { name: "Next.js", category: "frontend", },
      { name: "TypeScript", category: "frontend", },
      { name: "JavaScript", category: "frontend", },
      { name: "Tailwind CSS", category: "frontend",},
      { name: "HTML/CSS", category: "frontend", },
    ],
  },
  {
    category: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", category: "backend", },
      { name: "Express", category: "backend", },
      { name: "NestJs", category: "backend", },
      { name: "REST API", category: "backend", },
      { name: "Python", category: "backend", },
    ],
  },
  {
    category: "database",
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", category: "database", },
      { name: "PostgreSQL", category: "database",},
      { name: "MySQL", category: "database", },
      { name: "Redis", category: "database", },
    ],
  },
  {
    category: "tools",
    title: "Tools & Others",
    skills: [
      { name: "Git", category: "tools", },
      { name: "Docker", category: "tools",},
      { name: "Vercel", category: "tools",},
      { name: "GitHup", category: "tools", },
      { name: "GitLab", category: "tools",},
      { name: "OCR", category: "tools",},
      { name: "Deep Learning", category: "tools",},
      { name: "Swagger", category: "tools",},
    ],
  },
];
