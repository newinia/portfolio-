import { Project } from "@/types/project";

export const projects: Project[] = [
{
  id: 1,

  title: "Real-Time Emotion Detection System",

  categories: [
    "Machine Learning",
    "Data",
    "Development",
    "UI/UX"
  ],

  image: "/project/emoscan-1.png",

  description:
    "A real-time emotion detection system developed in 2026 using Computer Vision and Machine Learning techniques. The system analyzes facial expressions from video streams and visualizes emotion predictions through an interactive dashboard.",

  techStack: [
    "Python",
    "YOLOv8n-cls",
    "Haar Cascade",
    "OpenCV",
    "Google Colab",
    "Figma"
  ],

  github: "https://github.com/newinia/emoscan",

  figma: "https://www.figma.com/design/lDqJmbIDmM87DPkkpCMkOb/Semester-6?node-id=1-2&t=fcl2nQjBPa4rfUVq-1",

  roles: [
  {
    title: "Data Preprocessing",
    description:
      "Prepared and augmented image datasets for model training."
  },
  {
    title: "Machine Learning",
    description:
      "Supported emotion detection model development using Computer Vision techniques."
  },
  {
    title: "UI/UX Design",
    description:
      "Designed dashboard interfaces for emotion monitoring and visualization."
  },
  {
    title: "Frontend Development",
    description:
      "Built a real-time dashboard to display emotion detection results."
  }

  ],

  gallery: [
    "/project/emoscan-1.png",
    "/project/emoscan-2.png",
    "/project/emoscan-3.png",
    "/project/emoscan-4.png",
    "/project/emoscan-5.png"
  ]
},
{
  id: 2,

  title: "Journalism Extracurricular Website",

  categories: [
    "System Analyst",
    "UI/UX"
  ],

  image: "/project/smandas-1.png",

  description:
  "Designed in 2026, this journalism extracurricular website supports content management and administrative activities through structured system analysis and user-centered design.",

  techStack: [
    "Figma",
    "Use Case Diagram",
    "Activity Diagram",
    "Sequence Diagram",
    "ERD",
    "Class Diagram"
  ],

  github: "",

  figma: "https://www.figma.com/design/lDqJmbIDmM87DPkkpCMkOb/Semester-6?node-id=0-1&p=f&t=fcl2nQjBPa4rfUVq-0",

  roles: [
    {
      title: "System Analysis",
      description:
        "Analyzed requirements and designed system models."
    },
    {
      title: "UI/UX Design",
      description:
        "Designed admin interfaces and user workflows."
    },
    {
      title: "Testing & Debugging",
      description:
        "Identified bugs and fixed system issues."
    }
  ],

  gallery: [
    "/project/smandas-1.png",
    "/project/smandas-2.png",
    "/project/smandas-3.png",
    "/project/smandas-4.png",
  ]
},
{
  id: 3,

  title: "KUDAKU",

  categories: [
  "Development",
  "UI/UX",
  "System Analyst",
],

  image: "/project/project-kudaku-1.png",

  description:
    "KUDAKU is a horse farm management platform developed in 2024 to simplify and optimize daily farm operations, including data management and operational processes.",

  techStack: [
    "Figma",
    "Laravel",
    "Android Studio",
    "REST API",
    "MySQL",
    "Java",
  ],

  github: "https://github.com/vellisyaafifa14/mobile-kudaku",

  figma: "https://www.figma.com/design/1jBLDVxvw2AEtkYH6DnhFT/Semester-2-3?node-id=7-18&p=f&t=QT2TDUgKTPt9HqnP-0",

  roles: [
    {
      title: "System Analysis",
      description:
        "Requirement gathering and technical specification."
    },
    {
      title: "UI/UX Design",
      description:
        "Designed web and mobile application interfaces based on project requirements."
    },
    {
      title: "Development",
      description:
        "Built and maintained frontend features for both the web platform and mobile app."
    },
    {
      title: "Backend Support",
      description:
        "Built and maintained frontend features for both web and mobile applications, while developing several API endpoints for data management and system integration."
    }
  ],

  gallery: ["/project/project-kudaku-1.png","/project/project-kudaku-2.png"]
},
{
  id: 4,

  title: "SIMASIRUL",

  categories: [
    "System Analyst",
    "Development"
  ],

  image: "/project/SIMASIRUL-1.png",

  description:
    "Developed in 2025, SIMASIRUL is a web-based POS system designed to help small businesses manage sales transactions and daily operations through a streamlined digital platform.",

  techStack: [
    "Vue.js",
    "Use Case Diagram",
    "JavaScript",
    "HTML",
    "CSS"
  ],

  github: "https://github.com/happywintern/webapp-nfz",

  figma: "https://www.figma.com/design/J4odGnksEJ7Qo8MFraiyCo/Semester-4-5?node-id=1-1923&t=fcl2nQjBPa4rfUVq-1",

  roles: [
    {
      title: "System Analyst",
      description:
        "Analyzed requirements and modeled business processes."
    },
    {
      title: "Frontend Development",
      description:
        "Built application interfaces using Vue.js."
    }
  ],

  gallery: [
    "/project/SIMASIRUL-1.png",
    "/project/SIMASIRUL-2.jpg",
    "/project/SIMASIRUL-3.jpg",
    "/project/SIMASIRUL-4.jpg",
    "/project/SIMASIRUL-5.jpg",
    "/project/SIMASIRUL-6.jpg",
    "/project/SIMASIRUL-7.jpg",
]
},
{
  id: 5,

  title: "Lashie Lust Website",

  categories: [
    "Development"
  ],

  image: "/project/project-lashielust-1.png",

  description:
    "Developed in 2025, Lashie Lust is a web platform that includes an administrative dashboard for managing application data and supporting internal business operations.",

  techStack: [
    "Laravel",
    "HTML",
    "CSS",
    "JavaScript"
  ],

  github: "",

  figma: "",

  roles: [
    {
      title: "Frontend Development",
      description:
        "Built admin panel interfaces using Laravel."
    }
  ],

  gallery: [ "/project/project-lashielust-1.png",  "/project/project-lashielust-2.png",]
}

];