import Image from "next/image";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      max-w-7xl
      mx-auto
      min-h-screen
      grid
      lg:grid-cols-2
      items-center
      gap-12
      px-6
      pt-24
      "
    >
      {/* LEFT */}
      <div>
        <p className="text-lg text-gray-500 mb-2">
          Hello, I'm
        </p>
        
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
          Newi Muchlisinia
        </h1>
        <p className="uppercase tracking-[6px] text-gray-400 text-xs">
          Software Engineering Student
        </p>
        <div className="w-12 h-1 bg-black-400 rounded-full" />
        <p className="mt-4 text-gray-600 text-lg max-w-xl leading-relaxed">
          I am currently studying Software Engineering Technology at
          IPB University. My interests lie in Data Analytics,
          Machine Learning, and System Analysis, where I enjoy
          transforming ideas into meaningful digital solutions.
        </p>

        {/* Button */}
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="#projects"
            className="
            bg-black
            text-white
            px-8 py-4
            rounded-full
            flex items-center gap-3
            hover:bg-gray-800
            hover:scale-105
            transition-all duration-300
            "
          >
            View Projects
            <FiArrowRight />
          </a>

          <a
            href="/CV_Newi Muchlisinia.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
            border border-black
            px-8 py-4
            rounded-full
            flex items-center gap-3
            hover:bg-black
            hover:text-white
            hover:scale-105
            transition-all duration-300
            "
          >
            View CV
          </a>
        </div>
      </div>
      {/* RIGHT */}
  <div className="flex flex-col items-center">
  
    {/* FOTO */}
    <div
      className="
      relative
      w-[280px]
      h-[280px]
      lg:w-[400px]
      lg:h-[400px]
      rounded-full
      overflow-hidden
      bg-violet-100
      border-8
      border-white
      shadow-xl
      "
    >
      <Image
        src="/profil.jpg"
        alt="profile"
        fill
        className="object-cover"
        priority
      />
    </div>
  
    {/* SOCIAL */}
    <div className="flex gap-4 mt-8">
      <a
        href="https://www.linkedin.com/in/newi-muchlisinia/"
        target="_blank"
        rel="noopener noreferrer"
        className="
        w-12 h-12
        rounded-full
        bg-gray-100
        flex items-center justify-center
        hover:bg-black
        hover:text-white
        hover:scale-110
        transition-all duration-300
        "
      >
        <FiLinkedin size={20} />
      </a>
  
      <a
        href="https://github.com/newinia/"
        target="_blank"
        rel="noopener noreferrer"
        className="
        w-12 h-12
        rounded-full
        bg-gray-100
        flex items-center justify-center
        hover:bg-black
        hover:text-white
        hover:scale-110
        transition-all duration-300
        "
      >
        <FiGithub size={20} />
      </a>
  
      <a
        href="mailto:newimuchlisinia@gmail.com"
        className="
        w-12 h-12
        rounded-full
        bg-gray-100
        flex items-center justify-center
        hover:bg-black
        hover:text-white
        hover:scale-110
        transition-all duration-300
        "
      >
        <FiMail size={20} />
      </a>
  
    </div>

</div>
    </section>
  );
}
