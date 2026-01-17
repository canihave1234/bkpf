export default function Footer() {
  return (
    <footer className="mt-32 pb-16 text-sm text-[var(--muted)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        
        <p>
          © {new Date().getFullYear()} Byungwook Jeon
        </p>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/byungwook-bk-jeon/"
            target="_blank"
            className="hover:text-[var(--accent)]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/BKjeon4"
            target="_blank"
            className="hover:text-[var(--accent)]"
          >
            GitHub
          </a>
          <a
            href="/bk_jeon_resume.pdf"
            download
            className="hover:text-[var(--accent)]"
          >
            Resume
          </a>
        </div>

      </div>
    </footer>
  );
}
