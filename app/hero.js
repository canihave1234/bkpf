"use client";

import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("aboutme")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center
                 bg-gradient-to-b from-rose-50 via-white to-white pt-24"
    >
      {/* NAV */}
      <nav className="fixed top-8 right-10 flex gap-8 text-sm text-gray-700 ">
        <a href="#home" className="hover:text-rose-600">HOME</a>
        <a href="#aboutme" className="hover:text-rose-600">ABOUT</a>
        <a href="#projects" className="hover:text-rose-600">PROJECTS</a>
        <a href="#skills" className="hover:text-rose-600">SKILLS</a>
        <a href="#contact" className="hover:text-rose-600">CONTACT</a>
      </nav>

      {/* BK EMOJI (기존 그대로) */}
      <div className="text-6xl mb-6">    <img
      src="/projects/bkitself.png"
      alt="BK character"
      className="w-96 h-96"
    />
</div>

      <h1 className="text-6xl md:text-7xl font-bold">
        Hi, I&apos;m <span className="text-rose-600">Byungwook</span>
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        You can just call me <strong>BK 😎</strong>
      </p>

      {/* SOCIAL */}
      <div className="mt-6 flex gap-6 text-xl text-gray-500">
        <a href="https://www.linkedin.com/in/byungwook-bk-jeon/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/BKjeon4" target="_blank">
          <FaGithub />
        </a>
        <a href="/projects/resume.pdf" download>
          <FaFileDownload />
        </a>
      </div>

      {/* EXPLORE */}
      <button
        onClick={scrollToAbout}
        className="mt-14 px-8 py-3 rounded-full border border-rose-600 text-rose-600
                   hover:bg-rose-600 hover:text-white transition"
      >
        EXPLORE ↓
      </button>
    </section>
  );
}
