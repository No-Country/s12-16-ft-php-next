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
            className={`${isvisible ? " w-full flex-none md:w-64 mr-0 transition-all duration-700 ease-in-out" : "invisible translate-y-0 duration-700 md:w-0 md:flex-none md:mr-0 md:pr-0"}`}
          >
            <SideNav isvisible={isvisible} />
          </div>
          <div className="flex flex-col justify-center">
            <CloseOpenButton
              click={toggleSideNav}
            />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
