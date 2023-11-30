'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
//import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/dashboard' },
    { name: 'Stock', href: '/dashboard/stock' },
    { name: 'Facturas', href: 'dashboard/facturas' },
    { name: 'Articulos', href: 'dashboard/articulos' },
    { name: 'Historial', href: 'dashboard/historial' },
    { name: 'Ingresos', href: 'dashboard/ingresos' }
];

export default function NavBar() {
    //const pathName = usePathname();

    return (
        <>
            {
                links.map((link => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className='flex h-[48px] grow items-center justify-center  text-txt-custom gap-2 rounded-md p-3 text-md font-medium hover:bg-txt-custom hover:text-white md:flex-none md:justify-start md:p-2 md:px-3'

                        > {link.name}</Link>
                    )
                }))
            }
        </>
    )
}