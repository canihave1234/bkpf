"use client";

export default function Projects() {
  return (
    <>
      {/* ===== Projects Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ===== Project 1 : Code O'Clock ===== */}
        <div className="space-y-4 relative">
          <div className="group relative">
            <div
              className="pointer-events-none fixed top-1/2 left-1/2
                         -translate-x-1/2 -translate-y-1/2
                         w-[90vw] max-w-5xl opacity-0
                         group-hover:opacity-100
                         transition-opacity duration-200
                         z-40 hidden lg:block"
            >
              <img
                src="/projects/code.jpg"
                alt="Code O'Clock Preview"
                className="rounded-2xl shadow-2xl border bg-white"
              />
            </div>

            <div className="bg-white border p-6 rounded-2xl transition">
              <h3 className="text-xl font-semibold">Coding and bootcamp platform</h3>
            </div>
          </div>

          <p className="text-[var(--muted)]">
          I designed and developed the entire frontend to create an approachable, 
          user-friendly learning experience.
          </p>

          <p className="text-sm tech-stack font-semibold">
            Java · Spring Boot · Hibernate · Thymeleaf · Docker
          </p>
          <div className="flex items-center gap-6 text-sm">
          <a
            href="https://finalproject-bk.onrender.com/startpage"
            target="_blank"
            className="inline-block hover:underline"
          >
            Visit Live Project →
          </a>
           
              <a
            href="https://github.com/BKjeon4/Code-O-clock-workspace"
            target="_blank"
            className="hover:underline text-[var(--muted)]"
            >
            Visit GitHub →
          </a>
          </div>
        </div>

        {/* ===== Project 2 : OWMCB ===== */}
        <div className="space-y-4 relative">
          <div className="group relative">
            <div
              className="pointer-events-none fixed top-1/2 left-1/2
                         -translate-x-1/2 -translate-y-1/2
                         w-[90vw] max-w-5xl opacity-0
                         group-hover:opacity-100
                         transition-opacity duration-200
                         z-40 hidden lg:block"
            >
              <img
                src="/projects/owmcb.jpg"
                alt="OWMCB Preview"
                className="rounded-2xl shadow-2xl border bg-white"
              />
            </div>

            <div className="bg-white border p-6 rounded-2xl transition">
              <h3 className="text-xl font-semibold">Game Dashboard</h3>
            </div>
          </div>

          <p className="text-[var(--muted)]">
            Admin-based Overwatch in-house dashboard with
            authentication and role-based access.
          </p>

           <p className="text-sm tech-stack font-semibold">
            Next.js · Node.js · Express · Docker · Vercel
          </p>

           <div className="flex items-center gap-6 text-sm">
          <a
            href="https://owmcb.vercel.app/"
            target="_blank"
            className="inline-block hover:underline"
          >
            Visit Live Project →
          </a>
           
              <a
            href="https://github.com/BKjeon4/ow"
            target="_blank"
            className="hover:underline text-[var(--muted)]"
            >
            Visit GitHub →
          </a>
          </div>
        </div>

        {/* ===== Project 3 : Portfolio ===== */}
        <div className="space-y-4 relative">
          <div className="group relative">
            <div
              className="pointer-events-none fixed top-1/2 left-1/2
                         -translate-x-1/2 -translate-y-1/2
                         w-[90vw] max-w-5xl opacity-0
                         group-hover:opacity-100
                         transition-opacity duration-200
                         z-40 hidden lg:block"
            >
              <img
                src="/projects/bk.jpg"
                alt="Portfolio Preview"
                className="rounded-2xl shadow-2xl border bg-white"
              />
            </div>

            <div className="bg-white border p-6 rounded-2xl transition">
              <h3 className="text-xl font-semibold">Personal Portfolio</h3>
            </div>
          </div>

          <p className="text-[var(--muted)]">
            A calm, story-driven portfolio focused on
            human-friendly design and clarity.
          </p>

           <p className="text-sm tech-stack font-semibold">
            Next.js · Tailwind · Framer Motion · Vercel
          </p>

            <div className="flex items-center gap-6 text-sm">
           <span className="text-sm text-[var(--muted)]">
            You are here 🙂
          </span>
           
              <a
            href="https://github.com/BKjeon4/pf"
            target="_blank"
            className="hover:underline text-[var(--muted)]"
            >
            Visit GitHub →
          </a>
          </div>

            
        </div>

      </div>
    
    </>
  );
}
