import "./globals.css";
import { Fraunces, Epilogue } from "next/font/google";
import type { ReactNode } from "react";

/* ===== Fonts ===== */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${epilogue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
