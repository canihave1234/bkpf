import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col gap-6">

        {/* 상단 영역 */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* Left */}
          <div>
          
          </div>

          {/* Right - Links */}
          <div className="flex gap-4 text-xl text-gray-500">
            <a
              href="https://www.linkedin.com/in/byungwook-bk-jeon/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/BKjeon4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

             <a href="/projects/resume.pdf" download>
               <FaEnvelope />
                  </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} Byungwook Jeon. All rights reserved.</p>
          <p>
          :-)
          </p>
        </div>

      </div>
    </footer>
  );
}
