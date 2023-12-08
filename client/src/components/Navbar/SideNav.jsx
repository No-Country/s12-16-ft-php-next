import Image from "next/image";
import NavBar from "../ui/NavLinks/nav-links";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";


export default function SideNav() {

  return (
    <div className="flex h-full flex-col bg-bg-custom px-3 py-4 md:px-2">
      <div className="flex justify-center p-10">
        <ArrowLeftOnRectangleIcon
          className="h-10 w-10 text-txt-custom"
        />
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavBar />
        <div className="flex justify-center bg-bg-img py-10">
          <Image
            className="w-24 h-24 rounded-full object-cover"
            src="/workerman.png"
            width={'100'}
            height={'100'}
            alt="Imagen"
          />
        </div>
      </div>
    </div>
  );
}
