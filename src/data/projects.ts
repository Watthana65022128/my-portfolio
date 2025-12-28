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
    category: ["mobile", "frontend"],
    githubUrl: "https://github.com/Watthana65022128/agricultural-expense-management-app",
    featured: false,
    date: "2024-01",
  },
  {
    id: "2",
    title: "Farm Expense Management API",
    description:
      "An agricultural expense management system with OCR receipt scanning and farm management features.",
    image: "/images/projects/agricultural-app.jpg",
    technologies: ["Node.js", "Express.JS","MySQL",],
    category: "backend",
    githubUrl: "https://github.com/Watthana65022128/agricultural-expense-management-api",
    featured: false,
    date: "2023-11",
  },
  {
    id: "3",
    title: "Face Tracking System",
    description:
      "Real-time Behavioral Monitoring for Online Examinations",
    image: "/images/projects/agricultural-app.jpg",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    category: ["fullstack", "web"],
    liveUrl: "https://face-tracking-system.vercel.app/login",
    githubUrl: "https://github.com/Watthana65022128/face-tracking-system",
    featured: false,
    date: "2023-09",
  },
  {
    id: "4",
    title: "Thai Handwritten OCR",
    description:
      "Optical Character Recognition (OCR) for Thai Handwritten Text Using Deep Learning",
    image: "/images/projects/agricultural-app.jpg",
    technologies: ["Python", "PyTorch", "Vision Transformer"],
    category: "machine learning",
    githubUrl: "https://github.com/Watthana65022128/model-vit-vision-transformer",
    featured: false,
    date: "2023-09",
  },
  {
    id: "5",
    title: "Inventory Management API",
    description:
      "A RESTful API for inventory management with JWT authentication and role-based access control",
    image: "/images/projects/agricultural-app.jpg",
    technologies: ["Nest", "PostgreSQL", "Swagger", "Docker"],
    category: "backend",
    githubUrl: "https://github.com/Watthana65022128/inventory-track-api",
    featured: false,
    date: "2023-09",
  },
];
