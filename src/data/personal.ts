import { PersonalInfo, SocialLink, NavItem } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Watthana Kayowaen",
  title: "Full-Stack Developer",
  bio: [
    "Hello, I'm Jame, a dedicated Full-Stack Developer with a strong interest in modern web technologies. I’m passionate about building applications that are visually refined, high-performing, and genuinely user-centric.",
    "With solid experience in both frontend and backend development, I focus on writing clean, maintainable code and designing systems that are structured, scalable, and reliable.",
  ],
  email: "watthana.wk@gmail.com",
  location: "ChaingMai, Thailand",
  avatar: "/images/profile.jpg",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Watthana65022128",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/watthana-kayowaen-220243328/",
    icon: "linkedin",
  },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
];
