
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/components/Navbar";
import { Footer } from "@/components/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/components/components/Authprovider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: PropsWithChildren<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div style={{ minHeight: "calc(100vh - 275px - 74px)" }}>
            {children}
          </div>
          <Toaster />
          <Footer />
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
