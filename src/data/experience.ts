import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Company Inc.",
    position: "Senior Full-Stack Developer",
    location: "Bangkok, Thailand",
    startDate: "2023-01",
    current: true,
    description:
      "Leading development of enterprise web applications and mentoring junior developers.",
    responsibilities: [
      "Architected and developed scalable web applications using Next.js and Node.js",
      "Led a team of 5 developers in agile development processes",
      "Improved application performance by 40% through optimization techniques",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Conducted code reviews and mentored junior developers",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "2",
    company: "Digital Agency Co.",
    position: "Full-Stack Developer",
    location: "Bangkok, Thailand",
    startDate: "2021-06",
    endDate: "2022-12",
    current: false,
    description:
      "Developed responsive web applications for various clients across different industries.",
    responsibilities: [
      "Built and maintained 10+ client websites using React and Next.js",
      "Integrated third-party APIs and payment gateways",
      "Collaborated with designers to implement pixel-perfect UIs",
      "Optimized websites for SEO and performance",
      "Provided technical support and maintenance for existing projects",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Vercel",
    ],
  },
  {
    id: "3",
    company: "Startup XYZ",
    position: "Frontend Developer",
    location: "Remote",
    startDate: "2020-03",
    endDate: "2021-05",
    current: false,
    description:
      "Built user interfaces for a SaaS product from the ground up.",
    responsibilities: [
      "Developed responsive React components for the main product",
      "Implemented state management using Redux",
      "Created reusable component library",
      "Worked closely with UX designers to improve user experience",
      "Wrote unit and integration tests using Jest and React Testing Library",
    ],
    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "SCSS",
      "Jest",
      "Storybook",
    ],
  },
];
