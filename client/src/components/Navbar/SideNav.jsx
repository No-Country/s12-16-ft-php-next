import Image from "next/image";
import NavBar from "../ui/NavLinks/nav-links";

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-bg-custom">
            <div className="w-32 text-white md:w-40">
                abrir/cerrar
            </div>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavBar />
                <div>
                    <Image
                        // src={'/'}
                        alt="Imagen" />
                </div>
            </div>
        </div>
    );
}