"use client";
import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Scroll to top"
      className="
        fixed bottom-8 right-8 z-50
        w-11 h-11 rounded-full
        flex items-center justify-center
        bg-[var(--accent-soft)]
        backdrop-blur
        border border-white/40
        hover:scale-105
        transition
      "
    >
      {/* triangle */}
      <span
        className="
          block
          w-0 h-0
          border-l-[6px] border-l-transparent
          border-r-[6px] border-r-transparent
          border-b-[10px] border-b-[var(--text)]
        "
      />
    </button>
  );
}
