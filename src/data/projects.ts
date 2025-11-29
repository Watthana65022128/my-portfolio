import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Smart Farm Management App",
    description:
      "A smart farm management application for farmers to efficiently track and manage agricultural expenses",
    image: "/images/projects/agricultural-app.jpg",
    technologies: [
      "Flutter",
      "Dart",
      "Android Studio",
    ],
    category: "mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Watthana65022128/agricultural-expense-management-app",
    featured: true,
    date: "2024-01",
  },
  {
    id: "2",
    title: "Farm Expense Management API",
    description:
      "An agricultural expense management system with OCR receipt scanning and farm management features.",
    image: "/images/projects/agricultural-api.jpg",
    technologies: ["Node.js", "Express.JS","MySQL",],
    category: "backend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Watthana65022128/agricultural-expense-management-api",
    featured: true,
    date: "2023-11",
  },
  {
    id: "3",
    title: "Face Tracking System",
    description:
      "Real-time Behavioral Monitoring for Online Examinations",
    image: "/images/projects/Tracking.jpg",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Watthana65022128/face-tracking-system",
    featured: true,
    date: "2023-09",
  },
];
