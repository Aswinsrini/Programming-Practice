"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import AuthProvider from "./auth/Provider";
import { SessionProvider } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export const metadata: Metadata = {
  title: "Testing next",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={roboto.className}>
        <SessionProvider>{children}</SessionProvider>
        {/* Next-auth authentication */}
        {children}
      </body>
    </html>
    // </ClerkProvider>
  );
}
