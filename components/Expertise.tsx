import {
  FiBarChart2,
  FiLayers,
  FiPenTool,
  FiCode,
} from "react-icons/fi";

const expertise = [
  {
    title: "Data Analytics",
    description:
      "Extracting insights from data using statistical methods and predictive modeling.",
    icon: <FiBarChart2 size={24} />,
  },
  {
    title: "System Analysis",
    description:
      "Designing robust architecture and documenting software requirements.",
    icon: <FiLayers size={24} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive interfaces with a focus on usability and accessibility.",
    icon: <FiPenTool size={24} />,
  },
  {
    title: "Web Development",
    description:
      "Building responsive and performant web applications.",
    icon: <FiCode size={24} />,
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <h2 className="text-center text-4xl font-bold mt-2 mb-16">
        My Expertise
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {expertise.map((item) => (
          <div
            key={item.title}
            className="bg-gray-100 rounded-3xl p-8"
          >
            {item.icon}

            <h3 className="font-semibold text-xl mt-6">
              {item.title}
            </h3>

            <p className="text-gray-500 mt-4 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
