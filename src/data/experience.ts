import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "University of Phayao",
    projectName: "Smart Farm Management App",
    location: "Phayao, Thailand",
    startDate: "2024-10",
    endDate: "2025-03",
    current: false,
    responsibilities: [
      "Developed agricultural expense management mobile application using Flutter and Node.js",
      "Implemented OCR receipt scanning feature with Google Cloud Vision API for automated data entry",
      "Built secure REST API with JWT authentication and MySQL database integration and Created admin dashboard for user management ",
    ],
    technologies: [
      "Futter",
      "Express.js",
      "Node.js",
      "MySQL",
    ],
  },
  {
    id: "2",
    company: "University of Phayao",
    projectName: "Face Tracking System",
    location: "Phayao, Thailand",
    startDate: "2025-06",
    endDate: "2025-09",
    current: false,
    responsibilities: [
      "Developed a face tracking system using Next.js and face-api.js for 2FA authentication",
      "Integrated MediaPipe for real-time face orientation detection and pose verification",
      "Built live tracking analytics with orientation monitoring and session statistics ",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "TensorFlow.js",
      "Face API.js",
      "MediaPipe",
    ],
  },
];
