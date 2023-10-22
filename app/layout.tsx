import "./styles/globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecomerce App",
  description:
    "App created with nextjs 13.5, nextauth, prisma and tailwind css",
  icons: { icon: "img/icon.ico" },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-zinc-600">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-5xl p-5">{children}</main>
      </body>
    </html>
  );
}
