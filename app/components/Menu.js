"use client";
import { useState, useEffect } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const scrollTo = (id) => {
    setOpen(false);

    
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const yOffset = -53; // ← 여기만 미세조정
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 250);
  };

  return (
    <>
      {/* ===== Circle Menu Button ===== */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="
            fixed top-6 right-6 z-50
            w-11 h-11 rounded-full
            flex items-center justify-center
            bg-[var(--accent-soft)]
            backdrop-blur
            border border-white/40
            hover:scale-105
            transition
          "
        >
          <span className="w-2 h-2 rounded-full bg-[var(--text)]" />
        </button>
      )}

      {/* ===== Overlay ===== */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-40
            backdrop-blur-md bg-white/50
          "
        />
      )}

      {/* ===== Menu Panel ===== */}
      <nav
        className={`
          fixed inset-0 z-50
          flex flex-col justify-center items-center gap-12
          text-4xl
          menu-font
          transition-all duration-300 ease-out
          ${open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="
            absolute top-6 right-6
            text-sm tracking-widest
            menu-font
          "
        >
          CLOSE
        </button>

        <button onClick={() => scrollTo("home")} className="hover:text-[var(--accent)]">
          HOME
        </button>
        <button onClick={() => scrollTo("aboutme")} className="hover:text-[var(--accent)]">
          ABOUT ME
        </button>
        <button onClick={() => scrollTo("projects")} className="hover:text-[var(--accent)]">
          PROJECTS
        </button>
        <button onClick={() => scrollTo("contact")} className="hover:text-[var(--accent)]">
          CONTACT
        </button>
      </nav>
    </>
  );
}
