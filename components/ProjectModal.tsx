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
  
  console.log(project.categories);
  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      z-50
      overflow-y-auto
      p-4
      "
    >
      <div
        className="
        bg-white
        max-w-6xl
        mx-auto
        rounded-3xl
        p-8
        md:p-10
        "
      >
        {/* CLOSE */}
        <div className="flex justify-end mb-6">
          <button
            onClick={onClose}
            className="
            w-10
            h-10
            rounded-full
            bg-gray-100
            hover:bg-black
            hover:text-white
            transition-all
            "
          >
            ✕
          </button>
        </div>

        {/* BANNER */}
        <div
          className="
          overflow-hidden
          rounded-3xl
          mb-8
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
            w-full
            h-[450px]
            object-cover
            "
          />
        </div>

        {/* CATEGORY */}
        <div className="flex flex-wrap gap-2 mb-4">

      {project.categories.map((category) => (

        <span
          key={category}
          className="
          px-4
          py-2
          rounded-full
          bg-gray-100
          text-sm
          "
        >
          {category}
        </span>

      ))}

    </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold">
          {project.title}
        </h1>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-10 mt-10">

          {/* LEFT */}
          <div className="lg:col-span-2">

            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>

            {/* ROLES */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">

              {project.roles?.map((role) => (
                <div key={role.title}>
                  <h3 className="font-bold text-xl mb-2">
                    {role.title}
                  </h3>

                  <p className="text-gray-600">
                    {role.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* TECH STACK */}
            <div
              className="
              bg-gray-100
              rounded-3xl
              p-6
              "
            >
              <h3 className="font-bold mb-4">
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">

                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                    px-3
                    py-2
                    bg-white
                    rounded-xl
                    text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>
            </div>

            {/* RESOURCES */}
            <div
              className="
              bg-gray-100
              rounded-3xl
              p-6
              "
            >
              <h3 className="font-bold mb-4">
                Resources
              </h3>

              <div className="flex flex-col gap-3">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    border
                    p-3
                    rounded-xl
                    text-center
                    hover:bg-black
                    hover:text-white
                    transition
                    "
                  >
                    GitHub Repository
                  </a>
                )}

                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    border
                    p-3
                    rounded-xl
                    text-center
                    hover:bg-black
                    hover:text-white
                    transition
                    "
                  >
                    Figma Prototype
                  </a>
                )}

              </div>
            </div>

          </div>

        </div>

        {/* GALLERY */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-8">
            Project Gallery
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            {project.gallery.map((image) => (
              <img
                key={image}
                src={image}
                alt=""
                className="
                rounded-2xl
                h-80
                object-cover
                w-full
                "
              />
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}