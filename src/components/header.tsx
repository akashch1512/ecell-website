"use client";

import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const [open, setOpen] = useState(false);
    const iconsSize = 32;

    const handleOpen = () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navLinkClassName = "text-3xl font-bold sm:text-base";
    const optionClassName = "text-xs font-normal sm:text-base";

    return (
        <header className="mb-16 flex items-center justify-between sm:mb-24 text-white">
            <h1 className="text-xl font-extrabold text-white"> E-CELL JNEC </h1> 
            <div className={`fixed right-0 top-0 ${open ? 'flex' : 'hidden'} z-10 w-full h-full gap-4 bg-gray-900/95 sm:static sm:flex sm:w-auto sm:h-auto sm:bg-transparent`}>
                <button className="absolute right-8 top-8 sm:hidden" onClick={handleClose}><IoClose size={iconsSize} className="text-white" /></button>
                <ul className="container mx-20 mt-32 flex flex-col gap-8 sm:mx-0 sm:mt-0 sm:flex-row sm:gap-4">
                    <li><Link href="/" className={`${navLinkClassName} text-white`} onClick={handleClose}>Home</Link></li>
                    <li><Link href="/posts" className={`${navLinkClassName} text-white`} onClick={handleClose}>Posts</Link></li>
                    <li><Link href="/about" className={`${navLinkClassName} text-white`} onClick={handleClose}>About</Link></li>
                    <li>
                        <select className={"bg-gray-800 text-white " + navLinkClassName} name="languages" id="languages">
                            <option className={optionClassName} value="en">English</option>
                            <option className={optionClassName} value="es">Spanish</option>
                            <option className={optionClassName} value="fr">French</option>
                        </select>
                    </li>
                </ul>
            </div>
            <button className="sm:hidden" onClick={handleOpen}><GiHamburgerMenu size={iconsSize} className="text-white" /></button>
        </header>
    );
}
