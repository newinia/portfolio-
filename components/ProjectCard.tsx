import { Project } from "@/data/project";

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-sm
      cursor-pointer
      "
    >
      <img
        src={project.image}
        alt=""
        className="h-64 w-full object-cover"
      />

      <div className="p-5">

        <h3 className="font-bold text-xl">
          {project.title}
        </h3>

        <p className="text-gray-500 mt-2">
          {project.description}
        </p>

      </div>
    </div>
  );
}
