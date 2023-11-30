import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import SideNav from "@/components/Navbar/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Sistema de Gestión de Inventario",
    description: "Sistema de Gestión de Inventario hecho por No-Country",
};

export default function Layout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Toaster position="top-center" richColors />
                <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                    <div className="w-full flex-none md:w-64">
                        <SideNav />
                    </div>
                    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
                </div>
            </body>
        </html>
    );
}
