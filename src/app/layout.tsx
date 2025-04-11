import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { CodeContextProvider } from "@/context/CodeContext";
import "./globals.css";
import "@/styles/markdown.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "BenchReAI",
  description: "Web application for benchmark your code and learn how to improve it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className={`${syne.variable} ${inter.variable} max-w-full`}>
        <CodeContextProvider>
          {children}
        </CodeContextProvider>
      </body>
    </html>
  );
}
