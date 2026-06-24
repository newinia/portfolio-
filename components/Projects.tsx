"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {

  const [active, setActive] =
    useState("All");

  const [selectedProject, setSelectedProject] =
  useState<Project | null>(null);

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === active
        );

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-32 px-6"
    >

      <h2 className="text-4xl font-bold mb-10">
        Recent Projects
      </h2>

      <div className="flex gap-4 mb-10 flex-wrap">

  {[
    "All",
    "Data",
    "Development",
  ].map((category) => (

    <button
      key={category}
      onClick={() =>
        setActive(category)
      }
      className={`
        px-6 py-3 rounded-full
        transition-all duration-300

        ${
          active === category
            ? "bg-black text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }
      `}
    >
      {category}
    </button>

  ))}

</div>

      <div className="grid md:grid-cols-3 gap-6">

        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() =>
              setSelectedProject(project)
            }
          />
        ))}

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}

    </section>
  );
}
