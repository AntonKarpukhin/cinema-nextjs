import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/component/header/header";
import Footer from "@/component/footer/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cinema",
	description: "MovieDB",
};

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="ru">
	<body className={ inter.className }>
		<Header/>
		{ children }
		<Footer/>
	</body>
	</html>
  );
}