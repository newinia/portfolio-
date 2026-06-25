import { Project } from "@/types/project";
import { FiArrowUpRight } from "react-icons/fi";

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
      group
      bg-white
      rounded-3xl
      overflow-hidden
      shadow-sm
      cursor-pointer

      hover:-translate-y-2
      hover:shadow-xl

      transition-all
      duration-300
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
          h-64
          w-full
          object-cover
          object-top

          group-hover:scale-105
          transition-transform
          duration-500
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">

        <div className="flex items-start justify-between">

          <h3
            className="
            font-bold
            text-xl

            group-hover:text-gray-700
            transition
            "
          >
            {project.title}
          </h3>

          <FiArrowUpRight
            className="
            opacity-0
            translate-x-2

            group-hover:opacity-100
            group-hover:translate-x-0

            transition-all
            duration-300
            "
          />
        </div>

        <p className="text-gray-500 mt-2 line-clamp-2">
          {project.description}
        </p>

      </div>
    </div>
  );
}