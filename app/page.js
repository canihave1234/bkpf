/* ================= ICON IMPORTS ================= */
"use client";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaTerminal,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiR,
  SiPerl,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiFlask,
  SiFastapi,
  SiVercel,
  SiCloudflare,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiMongodb,
  SiGraphql,
  SiJira,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

import {
  SiSpringboot,
  SiHibernate,
  SiApachemaven,
  SiMariadb,
  SiThymeleaf,
} from "react-icons/si";

import { FaDatabase, FaServer } from "react-icons/fa";
import Hero from "./hero";
import ContactForm from "./contact";
import Footer from "./footer";
import "./globals.css";


/* ================= SKILL DATA ================= */
const skillSections = [
  {
    title: "Full Stack Development & Programming",
    items: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Spring MVC" },
      { name: "Spring Data JPA" },
      { name: "Hibernate", icon: SiHibernate },
      { name: "Maven", icon: SiApachemaven },
      { name: "Thymeleaf", icon: SiThymeleaf },
      { name: "Session-based Authentication", icon: FaServer },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Render" },
      { name: "Vercel", icon: SiVercel },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: FaGitAlt },
      { name: "Jira", icon: SiJira },
      { name: "Linux", icon: FaLinux },
      { name: "Bash", icon: FaTerminal },
    ],
  },
  {
    title: "Database & Systems",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MariaDB", icon: SiMariadb },
      { name: "Oracle", icon: SiOracle },
      { name: "MongoDB", icon: SiMongodb },
      { name: "H2 Database", icon: FaDatabase },
    ],
  },
];



/* ================= PAGE ================= */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-gray-900 px-6">
{/* ================= HERO ================= */}

      <Hero />


{/* ================= ABOUT ================= */}
<section id="aboutme" className="py-24 max-w-5xl mx-auto px-6">
  <h2 className="text-3xl font-bold mb-12 text-left">About Me</h2>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="max-w-3xl"
  >

  <div className="
    flex flex-col gap-8
    max-w-4xl
    mx-auto
    text-left
  ">
    {/* 핵심 한 줄 */}
<p className="text-2xl text-gray-900 leading-relaxed">
  I have{" "}
  <span className="font-semibold text-rose-600">2+ years</span>{" "}
  of communication experience and{" "}
  <span className="font-semibold text-rose-600">1 year</span>{" "}
  of development experience, combining strong collaboration skills
  with clean, practical code.
</p>

</div>
  </motion.div>
</section>




{/* ================= PROJECTS ================= */}
<section id="projects" className="py-24 max-w-5xl mx-auto px-6">
  <h2 className="text-3xl font-bold mb-12">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* ================= Project 1 : Code O'Clock ================= */}
<div className="space-y-3 relative">

  {/* ===== Hover Trigger 영역 (프리뷰 뜨는 곳) ===== */}
  <div className="group relative">

    {/* ===== Large Hover Preview ===== */}
    <div
      className="pointer-events-none fixed top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2
                 w-[90vw] max-w-5xl
                 opacity-0
                 group-hover:opacity-100
                 transition-opacity duration-200
                 z-40 hidden lg:block"
    >
      <img
        src="/projects/code.jpg"
        alt="OWMCB Preview"
        className="rounded-2xl shadow-2xl border border-gray-200 bg-white"
      />
    </div>

    {/* ===== Project Card (hover 트리거 포함) ===== */}
    <div
      className="bg-white border border-gray-200 p-6 rounded-2xl
                 shadow-sm hover:shadow-md hover:-translate-y-1
                 hover:border-rose-500 transition"
    >
      <h3 className="text-xl font-semibold">
        Code Oclock
      </h3>

      {/* Tech Stack Icons */}
   {/* Tech Stack Icons */}
<div className="mt-4 flex gap-3 text-xl text-gray-400">
  <FaJava title="Java" />
  <SiSpringboot title="Spring Boot" />
  <SiHibernate title="Hibernate / JPA" />
  <SiApachemaven title="Maven" />
  <SiThymeleaf title="Thymeleaf" />
  <FaDocker title="Docker" />
</div>

    </div>
  </div>

  {/* ===== Description (hover 영향 없음) ===== */}
  <p className="text-sm text-gray-600 px-2">
An online coding and bootcamp platform, focusing on frontend development, layout design, and user interaction.
  </p>

  {/* ===== Button 영역 (프리뷰 절대 안 뜸) ===== */}
  <a
    href="https://finalproject-bk.onrender.com/startpage"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-2 text-rose-600 hover:underline"
  >
    Visit Live Project →
  </a>

</div>
{/* ================= Project2 : OWMCB ================= */}
<div className="space-y-3 relative">

  {/* ===== Hover Trigger 영역 (프리뷰 뜨는 곳) ===== */}
  <div className="group relative">

    {/* ===== Large Hover Preview ===== */}
    <div
      className="pointer-events-none fixed top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2
                 w-[90vw] max-w-5xl
                 opacity-0
                 group-hover:opacity-100
                 transition-opacity duration-200
                 z-40 hidden lg:block"
    >
      <img
        src="/projects/owmcb.jpg"
        alt="OWMCB Preview"
        className="rounded-2xl shadow-2xl border border-gray-200 bg-white"
      />
    </div>

    {/* ===== Project Card (hover 트리거 포함) ===== */}
    <div
      className="bg-white border border-gray-200 p-6 rounded-2xl
                 shadow-sm hover:shadow-md hover:-translate-y-1
                 hover:border-rose-500 transition"
    >
      <h3 className="text-xl font-semibold">
        GAME Dashboard
      </h3>

      {/* Tech Stack Icons */}
      <div className="mt-4 flex gap-3 text-xl text-gray-400">
        <SiNextdotjs title="Next.js" />
        <FaNodeJs title="Node.js" />
        <SiExpress title="Express" />
        <FaDocker title="Docker" />
      </div>
    </div>
  </div>

  {/* ===== Description (hover 영향 없음) ===== */}
  <p className="text-sm text-gray-600 px-2">
    Admin-based Overwatch in-house dashboard with authentication,
    role-based access, and session handling.
  </p>

  {/* ===== Button 영역 (프리뷰 절대 안 뜸) ===== */}
  <a
    href="https://owmcb.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-2 text-rose-600 hover:underline"
  >
    Visit Live Project →
  </a>

</div>

    {/* ================= Project 3 : Portfolio ================= */}
<div className="space-y-3 relative">

  {/* ===== Hover Trigger 영역 (프리뷰 뜨는 곳) ===== */}
  <div className="group relative">

    {/* ===== Large Hover Preview ===== */}
    <div
      className="pointer-events-none fixed top-1/2 left-1/2
                 -translate-x-1/2 -translate-y-1/2
                 w-[90vw] max-w-5xl
                 opacity-0
                 group-hover:opacity-100
                 transition-opacity duration-200
                 z-40 hidden lg:block"
    >
      <img
        src="/projects/bk.jpg"
        alt="OWMCB Preview"
        className="rounded-2xl shadow-2xl border border-gray-200 bg-white"
      />
    </div>

    {/* ===== Project Card (hover 트리거 포함) ===== */}
    <div
      className="bg-white border border-gray-200 p-6 rounded-2xl
                 shadow-sm hover:shadow-md hover:-translate-y-1
                 hover:border-rose-500 transition"
    >
      <h3 className="text-xl font-semibold">
       Portfolio
      </h3>

      {/* Tech Stack Icons */}
      <div className="mt-4 flex gap-3 text-xl text-gray-400">
        <SiNextdotjs title="Next.js" />
        <FaNodeJs title="Node.js" />
        <SiExpress title="Express" />
        <FaDocker title="Docker" />
         <SiVercel title="Vercel" />
      </div>
    </div>
  </div>

  {/* ===== Description (hover 영향 없음) ===== */}
<p className="text-sm text-gray-600 px-2">
  A personal portfolio focusing on clean UI, smooth interactions,
  and clear project storytelling. Designed to showcase my frontend work, technical stack,
  and development philosophy in a simple, user-friendly way.
</p>

  {/* ===== Button 영역 (프리뷰 절대 안 뜸) ===== */}
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-2 text-rose-600 hover:underline"
  >
    You are here :-)
  </a>

</div>

  </div>
</section>


      {/* ================= SKILLS ================= */}
<section id="skills" className="mt-32 max-w-5xl mx-auto px-6">
  <h2 className="text-3xl font-bold mb-14">Skills</h2>

  <div className="grid md:grid-cols-2 gap-10">
    <div className="border-l-2 pl-6">
      <h3 className="font-semibold mb-2">Frontend</h3>
      <p className="text-gray-600">
        React, Next.js, Tailwind CSS, Responsive UI
      </p>
    </div>

    <div className="border-l-2 pl-6">
      <h3 className="font-semibold mb-2">Backend</h3>
      <p className="text-gray-600">
        Java, JPA, Hibernate, Node.js, Express, C/C++
      </p>
    </div>

    <div className="border-l-2 pl-6">
      <h3 className="font-semibold mb-2">Database</h3>
      <p className="text-gray-600">
        MySQL, MariaDB, PostgreSQL, H2
      </p>
    </div>

    <div className="border-l-2 pl-6">
      <h3 className="font-semibold mb-2">Deployment</h3>
      <p className="text-gray-600">
        Docker, Render, Vercel, Linux
      </p>
    </div>
  </div>
</section>
 <br></br> <br></br> <br></br>
 <br></br>  <br></br>




{/* ================= CONTACT ================= */}
<section id="contact" className="mt-32 max-w-5xl mx-auto px-6">
    
      <h2 className="text-3xl font-bold mb-12">Contact Me</h2>

  <ContactForm />
</section>

  {/* ================= SKILLS ================= */}
    <Footer />

    </main>
  );
}
