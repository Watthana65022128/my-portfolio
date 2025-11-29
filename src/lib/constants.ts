// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const slideInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

// Transition configurations
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const smoothTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

// Skill level colors
export const skillLevelColors = {
  beginner: "bg-yellow-500",
  intermediate: "bg-blue-500",
  advanced: "bg-purple-500",
  expert: "bg-green-500",
};

// Project category labels
export const projectCategoryLabels = {
  web: "Web App",
  mobile: "Mobile App",
  fullstack: "Full-Stack",
  backend: "Backend",
  frontend: "Frontend",
  other: "Other",
};

// Regex patterns
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const URL_REGEX = /^https?:\/\/.+/;

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: "This field is required",
  invalidEmail: "Please enter a valid email address",
  minLength: (min: number) => `Minimum ${min} characters required`,
  maxLength: (max: number) => `Maximum ${max} characters allowed`,
};
