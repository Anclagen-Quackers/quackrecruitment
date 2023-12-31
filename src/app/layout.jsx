"use client";
import "./globals.css";
import "material-icons/iconfont/material-icons.css";
import { Roboto } from "next/font/google";
import Nav from "@/components/UI/Nav";
import Footer from "@/components/UI/Footer";

const inter = Roboto({ subsets: ["latin"], weight: ["100", "400", "500", "700", "900"], style: ["normal", "italic"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen flex flex-col"}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
