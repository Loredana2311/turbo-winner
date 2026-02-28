import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Massage Booking Platform",
  description: "Book massage sessions with certified therapists in the UK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-white p-2">
          Skip to content
        </a>
        <header className="bg-gray-100 px-6 py-4">
          <Navbar />
        </header>
        <main id="main-content">{children}</main>
        <footer className="bg-gray-100 px-6 py-4 mt-8 text-center text-sm">
          <p>&copy; 2026 UK Massage Booking</p>
          <p>
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms" className="underline">
              Terms of Service
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
