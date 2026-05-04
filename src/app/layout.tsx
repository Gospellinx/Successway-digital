import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../../components/Home/Navbar/ResponsiveNav";
import Footer from "../../components/Home/Footer/Footer";
import ScrollToTop from "../../components/Helper/ScrollToTop";

const fonts = Plus_Jakarta_Sans({
  weight: ['300','400','500','600','700', '800'],
  subsets: ["latin"],
  variable: '--font-plus-jakarta-sans',
})

export const metadata: Metadata = {
  title: "Successway Digital & Vocational Guidance Foundation ",
  description: "Successway Digital and Vocational Guidance Foundation is a non-profit based in Kurudu, Abuja, focused on empowering Nigerian youths through practical digital and vocational training. We’re passionate about helping young people unlock their potential, discover purpose, and build sustainable careers, with or without a university degree.",
  icons: {
    icon: '/favicon.png',
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
        className={`${fonts.variable} font-sans`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
