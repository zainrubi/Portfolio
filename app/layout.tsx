import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zain Ahmad | Software Engineer & Full-Stack Web Developer",
  description:
    "Portfolio of Zain Ahmad, a Software Engineer and Full-Stack Developer specializing in modern web applications, complex management systems, accountable business platforms, and SaaS products.",
  keywords: [
    "Zain Ahmad",
    "Software Engineer",
    "Full-Stack Web Developer",
    "Next.js Developer",
    "React",
    "TypeScript",
    "Web Applications",
    "Management Systems",
    "SaaS",
  ],
  authors: [{ name: "Zain Ahmad" }],
  openGraph: {
    title: "Zain Ahmad | Software Engineer & Full-Stack Web Developer",
    description:
      "Software Engineer and Full-Stack Developer building modern web applications, complex management systems, and SaaS products.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Ahmad | Software Engineer & Full-Stack Web Developer",
    description:
      "Software Engineer and Full-Stack Developer building modern web applications, complex management systems, and SaaS products.",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#08090d] text-slate-100 font-sans selection:bg-sky-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
