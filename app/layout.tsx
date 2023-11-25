
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/ModeToggle'
import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ibrahim",
  description: "A personal portfolio site built with Sanity and Next.js",
  // openGraph: {    images: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.b6465c73.png&w=640&q=75",  },
};

export default function RootLayout({
  children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
     
        <Navbar />
        {children}
        <Footer />
      
      </body>
    </html>
  );
}
