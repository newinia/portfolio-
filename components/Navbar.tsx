"use client";

import { useEffect, useState } from "react";

const sections = [
  "hero",
  "expertise",
  "skills",
  "projects",
  "contact",
];

export default function Navbar() {
  const [active, setActive] =
    useState("hero");

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

    sections.forEach((id) => {
      const section =
        document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-white/80
      backdrop-blur
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        py-5
        px-6
        "
      >
        <h1 className="font-bold text-xl">
          Portfolio
        </h1>

        <ul className="flex gap-4">

          <NavItem
            href="#hero"
            label="About"
            active={active}
            id="hero"
          />

          <NavItem
            href="#expertise"
            label="Expertise"
            active={active}
            id="expertise"
          />

          <NavItem
            href="#skills"
            label="Skills"
            active={active}
            id="skills"
          />

          <NavItem
            href="#projects"
            label="Projects"
            active={active}
            id="projects"
          />

          <NavItem
            href="#contact"
            label="Contact"
            active={active}
            id="contact"
          />

        </ul>
      </div>
    </nav>
  );
}
function NavItem({
  href,
  label,
  active,
  id,
}: {
  href: string;
  label: string;
  active: string;
  id: string;
}) {
  return (
    <li>
      <a
        href={href}
        className={`
          px-5 py-2 rounded-full
          transition-all duration-300
          ${
            active === id
              ? "bg-black text-white"
              : "text-black hover:bg-gray-100"
          }
        `}
      >
        {label}
      </a>
    </li>
  );
}