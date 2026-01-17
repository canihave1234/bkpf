"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef(null);

  // sending 상태 + 결과 상태 분리
  const [status, setStatus] = useState("idle"); 
  // idle | sending | success | error
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setShowMessage(true);
          formRef.current.reset();

          // ✅ 3초 후 메시지 자동 제거
          setTimeout(() => {
            setShowMessage(false);
            setStatus("idle");
          }, 3000);
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);
          setStatus("error");
          setShowMessage(true);

          // ✅ 3초 후 메시지 자동 제거
          setTimeout(() => {
            setShowMessage(false);
            setStatus("idle");
          }, 3000);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="max-w-xl space-y-6"
    >
      {/* EMAIL */}
      <input
        type="email"
        name="from_email"
        required
        placeholder="Your email"
        className="
          w-full
          border border-[var(--accent-soft)]
          rounded-md
          px-4 py-3
          bg-white/60
          focus:outline-none
          focus:border-[var(--accent)]
          focus:ring-1 focus:ring-[var(--accent)]
        "
      />

      {/* SUBJECT */}
      <input
        type="text"
        name="subject"
        required
        placeholder="Subject"
        className="
          w-full
          border border-[var(--accent-soft)]
          rounded-md
          px-4 py-3
          bg-white/60
          focus:outline-none
          focus:border-[var(--accent)]
          focus:ring-1 focus:ring-[var(--accent)]
        "
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        rows={5}
        required
        placeholder="Message"
        className="
          w-full
          border border-[var(--accent-soft)]
          rounded-md
          px-4 py-3
          bg-white/60
          focus:outline-none
          focus:border-[var(--accent)]
          focus:ring-1 focus:ring-[var(--accent)]
        "
      />

      {/* BUTTON */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="
          mt-6
          px-8 py-3
          rounded-full
          bg-[var(--accent)]
          text-white
          transition
          hover:opacity-90
          disabled:opacity-50
        "
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {/* SUCCESS MESSAGE */}
      {showMessage && status === "success" && (
        <div
          className="
            mt-6 rounded-lg
            bg-[var(--accent-soft)]
            border border-[var(--accent)]
            p-4
          "
        >
          <p className="font-medium text-[var(--text)]">
            Thank you so much for reaching out!
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            I’ll get back to you shortly.
          </p>
        </div>
      )}

      {/* ERROR MESSAGE */}
      {showMessage && status === "error" && (
        <div
          className="
            mt-6 rounded-lg
            bg-[var(--accent-soft)]
            border border-[var(--accent)]
            p-4
          "
        >
          <p className="font-medium text-[var(--text)]">
            Something went wrong.
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Please try again later or reach out via LinkedIn.
          </p>
        </div>
      )}
    </form>
  );
}
