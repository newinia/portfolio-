"use client";

import { Project } from "@/types/project";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      z-50
      overflow-y-auto
      "
    >
      <div
        className="
        bg-white
        max-w-6xl
        mx-auto
        mt-10
        rounded-3xl
        p-10
        "
      >
        <button
          onClick={onClose}
          className="mb-6"
        >
          Close ✕
        </button>

        <h1 className="text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-4">
          {project.description}
        </p>

        <div className="mt-8">

          <h3 className="font-semibold">
            Tech Stack
          </h3>

          <div className="flex gap-3 mt-3 flex-wrap">

            {project.techStack.map(
              (tech) => (
                <span
                  key={tech}
                  className="
                  border
                  px-4
                  py-2
                  rounded-full
                  "
                >
                  {tech}
                </span>
              )
            )}

          </div>

        </div>

        <div
          className="
          grid
          md:grid-cols-4
          gap-4
          mt-10
          "
        >
          {project.gallery.map(
            (image) => (
              <img
                key={image}
                src={image}
                alt=""
                className="
                rounded-xl
                h-72
                object-cover
                w-full
                "
              />
            )
          )}
        </div>

      </div>
    </div>
  );
}