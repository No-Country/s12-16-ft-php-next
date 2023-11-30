import Image from "next/image";
import NavBar from "../ui/NavLinks/nav-links";
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-bg-custom">
            <div className="flex justify-center p-10" >
                <ArrowLeftOnRectangleIcon className="h-10 w-10 text-txt-custom" />
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