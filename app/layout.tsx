import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kawala Blogs",
  description:
    "This is the blog website that has the latest works and blogs of Norbert Kawala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-[90%] mx-auto`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
