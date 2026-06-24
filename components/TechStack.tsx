const skills = [
  "Python",
  "Laravel",
  "Java",
  "MySQL",
  "Figma",
  "Next.js",
  "Tailwind",
  "Power BI",
];

export default function TechStack() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <p className="text-center text-sm text-gray-400 uppercase tracking-widest">
        Tools & Stack
      </p>

      <h2 className="text-center text-4xl font-bold mt-2 mb-16">
        Technical Arsenal
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              w-24
              h-24
              rounded-3xl
              bg-gray-100
              flex
              items-center
              justify-center
              font-medium
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}