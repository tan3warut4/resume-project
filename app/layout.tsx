"use client"
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { createContext, useContext } from "react";
import { LoginProvider } from "./context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


type Theme = {
  colors: {
    primary: string
    secondary: string
  }
}

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d"
  }
}
const ThemeContext = createContext<Theme>(defaultTheme)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeContext.Provider value={defaultTheme}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
        >
          <LoginProvider>
            <Navbar />
            {children}
          </LoginProvider>
        </body>
      </ThemeContext.Provider>
    </html>
  );
}

export const useTheme = () => useContext(ThemeContext)