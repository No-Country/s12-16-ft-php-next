"use client";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import SideNav from "@/components/Navbar/SideNav";
import React, { useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import CloseOpenButton from "@/components/ui/NavbarButton/CloseOpenButton";

export default function Layout({ children }) {
  const [isvisible, setIsvisible] = useState(true);

  const toggleSideNav = () => {
    setIsvisible(!isvisible);
  };
  return (
    <html lang="es">
      <body className={inter.className}>
        <Toaster position="top-center" richColors />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div
            className={`${
              isvisible
                ? "w-64 transform rounded-l-lg transition duration-700 ease-out"
                : "invisible w-0 transform transition-transform duration-300 ease-in-out"
            }`}
          >
            <SideNav />
          </div>
          <div className="flex flex-col justify-center">
            <CloseOpenButton click={toggleSideNav} />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            <div className="flex-grow bg-background p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
