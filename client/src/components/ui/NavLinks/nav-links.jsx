"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  MagnifyingGlassIcon,
  NewspaperIcon,
  WrenchIcon,
  ArrowPathIcon,
  ChartBarIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Inicio", href: "/dashboard", icon: ChartBarIcon },
  { name: "Stock", href: "/dashboard/stock", icon: MagnifyingGlassIcon },
  { name: "Facturas", href: "/dashboard/facturas", icon: NewspaperIcon },
  { name: "Articulos", href: "/dashboard/articulos", icon: WrenchIcon },
  { name: "Historial", href: "/dashboard/historial", icon: ArrowPathIcon },
  { name: "Ingresos", href: "/dashboard/ingresos", icon: FolderPlusIcon },
];

export default function NavBar() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-md flex h-[48px] grow items-center  justify-center gap-2 rounded-md p-3 font-medium text-txt-custom hover:bg-sky-700 hover:text-white md:flex-none md:justify-center md:p-2 md:px-3",
              {
                "bg-txt-custom text-white": pathName === link.href,
              },
            )}
          >
            <Icon className="w-7" /> {link.name}
          </Link>
        );
      })}
    </>
  );
}
