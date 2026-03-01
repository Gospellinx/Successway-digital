import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const fonts = Space_Grotesk({
  weight: ['300','400','500','600','700'],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Successway Digital & Vocational Guidance Foundation ",
  description: "Successway Digital and Vocational Guidance Foundation is a non-profit based in Kurudu, Abuja, focused on empowering Nigerian youths through practical digital and vocational training. We’re passionate about helping young people unlock their potential, discover purpose, and build sustainable careers, with or without a university degree.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={fonts.className}
      >
        {children}
      </body>
    </html>
  );
}
