import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "KUDAKU",

    category: "Development",

    image: "/projects/kudaku.jpg",

    description:
      "Horse Farm Management System",

    techStack: [
      "Laravel",
      "Java",
      "MySQL",
      "Figma",
    ],

    gallery: [
      "/projects/k1.jpg",
      "/projects/k2.jpg",
      "/projects/k3.jpg",
      "/projects/k4.jpg",
    ],
  },

  {
    id: 2,

    title: "Emotion AI",

    category: "Data",

    image: "/projects/emotion.jpg",

    description:
      "Sentiment Analysis",

    techStack: [
      "Python",
      "Tensorflow",
    ],

    gallery: [],
  },
];