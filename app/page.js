"use client";
import Menu from "./components/Menu";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./projects/page"
import ScrollTop from "./components/ScrollTop";

import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen  px-6">

      {/* ================= MENU ================= */}
      <Menu />

      {/* ================= HERO ================= */}
      <Hero />

   {/* ================= ABOUT ================= */}
<section id="aboutme" className="section">
  <div className="section-inner">

    <h2 className="section-title">About me</h2>

    <div className="section-body grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* ===== LEFT : TEXT ===== */}
  <div
  className="
    md:col-span-2
    space-y-4
    text-[var(--text)]
    leading-relaxed
    max-w-2xl
  "
>


        <p className="whitespace-nowrap">
          Hey, my name is <strong>Byungwook Jeon</strong>,  most people call me{" "}
          <strong>BK</strong>.
        </p>

        <p>
          I’m a software developer with a background in communication, education, and international business. </p>
        <p>
          Before moving
          into tech, I spent years working closely with people advising,
          coordinating across cultures, and delivering clear information in
          fast-paced environments.
        </p>

        <p>
          I’m always curious to learn more 
          whether it’s exploring new technologies, improving how users experience a product, or 
          finding better ways to communicate ideas through code. 
        </p>
      </div>

{/* ===== RIGHT : LINKS / ACTIONS ===== */}
<div className="space-y-10 text-center md:translate-x-60">

  {/* TITLE */}
  <p className="text-sm uppercase tracking-wider text-[var(--muted)]">
    Find me online
  </p>

  {/* LINKS */}
  <ul className="space-y-4 text-lg flex flex-col items-center">
    <li>
      <a
        href="https://www.linkedin.com/in/byungwook-bk-jeon/"
        target="_blank"
        className="flex items-center gap-3 hover:text-[var(--accent)] transition"
      >
        <FaLinkedin className="text-xl text-[var(--accent)]" />
        <span>LinkedIn</span>
      </a>
    </li>

    <li>
      <a
        href="https://github.com/BKjeon4"
        target="_blank"
        className="flex items-center gap-3 hover:text-[var(--accent)] transition"
      >
        <FaGithub className="text-xl text-[var(--accent)]" />
        <span>GitHub</span>
      </a>
    </li>

    <li>
      <a
        href="/bk_jeon_resume.pdf" 
        download
        className="flex items-center gap-3 hover:text-[var(--accent)] transition"
      >
        <FaFileDownload className="text-xl text-[var(--accent)]" />
        <span>Resume</span>
      </a>
    </li>
  </ul>

  {/* FOOTNOTE */}
  <p className="text-sm leading-relaxed text-[var(--muted)] max-w-xs mx-auto">
   I'd love to connect with you! Drop me a message anytime. 
  </p>
</div>



    </div>
  </div>
</section>


  {/* ================= PROJECTS ================= */}
<section id="projects" className="section">
  <div className="section-inner">
    <h2 className="section-title">Projects</h2>
    <Projects />
  </div>
</section>




      {/* ================= CONTACT ================= */}
      <section id="contact" className="section pb-[10vh]">
  <div className="section-inner">
    <h2 className="section-title">Contact</h2>
     <div className="section-body">
        <ContactForm />
       </div>
  </div>
</section>

      <Footer />

      <ScrollTop />
    </main>
  );
}
