// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export type ProjectCategory =
  | "web"
  | "mobile"
  | "fullstack"
  | "backend"
  | "frontend"
  | "machine learning";

// Skill Types
export interface Skill {
  name: string;
  category: SkillCategory;

  icon?: string;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"



export interface SkillGroup {
  category: SkillCategory;
  title: string;
  skills: Skill[];
}

// Experience Types
export interface Experience {
  id: string;
  company: string;
  projectName: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  responsibilities: string[];
  technologies: string[];
}

// Personal Info Types
export interface PersonalInfo {
  name: string;
  title: string;
  tagline?: string;
  bio: string[];
  email: string;
  location: string;
  avatar: string;
  resumeUrl?: string;
}

// Social Links Types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}
