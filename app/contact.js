"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); 
  // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
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
          formRef.current.reset();
        },
        (error) => {
          console.error("EMAILJS ERROR:", error);
          setStatus("error");
        }
      );
  };

  return (

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-xl space-y-6"
      >
        <input
          type="email"
          name="from_email"
          required
          placeholder="Your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-rose-400"
        />

      <input
          type="subject"
          name="your subject"
          required
          placeholder="subject"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-rose-400"
        />


        <textarea
          name="message"
          rows={5}
          required
          placeholder="message"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-rose-400"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="px-8 py-3 rounded-full border border-rose-600 text-rose-600
                     hover:bg-rose-600 hover:text-white transition
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {/* SUCCESS MESSAGE */}
        {status === "success" && (
          <div className="mt-6 rounded-lg bg-rose-50 border border-rose-200 p-4 text-rose-700">
            <p className="font-medium">
              Thank you so much for reaching out! 
            </p>
            <p className="mt-1 text-sm">
              Glad you didn't overthink it, i will get back to you shortly.
            </p>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {status === "error" && (
          <div className="mt-6 rounded-lg bg-red-50 border border-red-200 p-4 text-red-700">
            <p className="font-medium">
              Oops! Something went wrong.
            </p>
            <p className="mt-1 text-sm">
              Please try again later or reach out via LinkedIn.
            </p>
          </div>
        )}
      </form>
  
  );
}
