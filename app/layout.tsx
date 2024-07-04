import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700", "900"] });

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
      <body className={`${lato.className} w-[90%] mx-auto`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
