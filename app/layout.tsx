import type { Metadata } from "next";
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

import { VT323 } from "next/font/google";

const vt323 = VT323({
  weight: "400",
  variable: "--font-vt323",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zainab Iqbal | Senior Frontend Developer",
  description: "Senior Frontend Developer & React.js Expert specializing in Next.js, Full-Stack development, and creating exceptional user experiences.",
  keywords: ["Frontend Developer", "React.js", "Next.js", "Full-Stack", "Web Development", "UI/UX"],
  authors: [{ name: "Zainab Iqbal" }],
  creator: "Zainab Iqbal",
  openGraph: {
    title: "Zainab Iqbal | Senior Frontend Developer",
    description: "Senior Frontend Developer & React.js Expert specializing in Next.js, Full-Stack development, and creating exceptional user experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zainab Iqbal | Senior Frontend Developer",
    description: "Senior Frontend Developer & React.js Expert specializing in Next.js, Full-Stack development, and creating exceptional user experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
