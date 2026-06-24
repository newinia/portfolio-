import {
  SiPython,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiUnity,
  SiBlender,
  SiAndroidstudio,
  SiTensorflow,
  SiGit,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const skills = [
  {
    name: "Python",
    icon: <SiPython size={40} />,
  },
  {
    name: "Java",
    icon: <FaJava size={40} />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel size={40} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={40} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={40} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} />,
  },
  {
    name: "TensorFlow",
    icon: <SiTensorflow size={40} />,
  },
  {
    name: "Figma",
    icon: <SiFigma size={40} />,
  },
  {
    name: "Power BI",
    icon: <span className="text-4xl">📊</span>,
  },
  {
    name: "Android Studio",
    icon: <SiAndroidstudio size={40} />,
  },
  {
    name: "Unity",
    icon: <SiUnity size={40} />,
  },
  {
    name: "Blender",
    icon: <SiBlender size={40} />,
  },
  {
    name: "Git",
    icon: <SiGit size={40} />,
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-gray-400 text-xs">
          Technologies
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Tools & Stack
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Technologies and tools I use to build
          software, analyze data, and design digital
          experiences.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
            bg-white
            rounded-3xl
            p-6

            flex
            flex-col
            items-center
            justify-center

            shadow-sm

            hover:-translate-y-2
            hover:shadow-xl

            transition-all
            duration-300
            "
          >
            <div className="mb-4">
              {skill.icon}
            </div>

            <span className="text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}
