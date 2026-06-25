import {
  FiMail,
  FiGithub,
} from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-16 px-6"
    >

      <h2 className="text-center text-4xl font-bold mt-2">
        Let's Connect
      </h2>

      <p className="text-center text-gray-500 mt-4 max-w-xl mx-auto">
        Open to opportunities, collaborations,
        and conversations related to software
        development, data analytics, and technology.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-16">

        {/* EMAIL */}
        <a
          href="mailto:newimuchlisinia@gmail.com"
          className="
          group
          bg-gray-100
          rounded-3xl
          p-10

          flex
          flex-col
          items-center
          gap-4

          hover:bg-black
          hover:text-white
          hover:-translate-y-2

          transition-all
          duration-300
          "
        >
          <FiMail
            size={28}
            className="transition-all"
          />

          <h3 className="font-semibold">
            Email
          </h3>

          <p className="text-sm text-center opacity-70">
            newimuchlisinia@gmail.com
          </p>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/newi-muchlisinia/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group
          bg-gray-100
          rounded-3xl
          p-10

          flex
          flex-col
          items-center
          gap-4

          hover:bg-black
          hover:text-white
          hover:-translate-y-2

          transition-all
          duration-300
          "
        >
          <FaLinkedinIn
            size={28}
            className="transition-all"
          />

          <h3 className="font-semibold">
            LinkedIn
          </h3>

          <p className="text-sm text-center opacity-70">
            Connect with me
          </p>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/newinia/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group
          bg-gray-100
          rounded-3xl
          p-10

          flex
          flex-col
          items-center
          gap-4

          hover:bg-black
          hover:text-white
          hover:-translate-y-2

          transition-all
          duration-300
          "
        >
          <FiGithub
            size={28}
            className="transition-all"
          />

          <h3 className="font-semibold">
            GitHub
          </h3>

          <p className="text-sm text-center opacity-70">
            View my repositories
          </p>
        </a>

      </div>
    </section>
  );
}