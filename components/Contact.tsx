import {
  FiMail,
  FiGithub,
} from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <h2 className="text-center text-4xl font-bold">
        Let's Connect
      </h2>

      <p className="text-center text-gray-500 mt-4">
        Open to new conversations regarding
        data engineering and software
        development.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <a
          href="mailto:newimuchlisinia@gmail.com"
          className="
          bg-gray-100
          rounded-3xl
          p-10
          flex
          flex-col
          items-center
          gap-4
          "
        >
          <FiMail size={24} />
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/newi-muchlisinia/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          bg-gray-100
          rounded-3xl
          p-10
          flex
          flex-col
          items-center
          gap-4
          "
        >
          <FaLinkedinIn size={24} />
          LinkedIn
        </a>

        <a
          href="https://github.com/newinia/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          bg-gray-100
          rounded-3xl
          p-10
          flex
          flex-col
          items-center
          gap-4"
        >
          <FiGithub size={24} />
          GitHub
        </a>
      </div>
    </section>
  );
}
