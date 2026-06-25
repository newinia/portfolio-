export interface Project {
  id: number;
  title: string;
  categories: string[];

  image: string;
  description: string;

  techStack: string[];
  gallery: string[];

  roles: {
    title: string;
    description: string;
  }[];

  github?: string;
  figma?: string;
}