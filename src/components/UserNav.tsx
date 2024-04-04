
"use client";

import { PlusCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserNav() {
    const pathname = usePathname();

    return (
        <Navbar fluid rounded className="px-5 md:px-24 py-5 shadow-md">
            <Link href="/">
                <img src="https://templates.hibootstrap.com/gable/default/assets/img/logo.png" className="mr-3 h-12" alt="Flowbite React Logo" />
            </Link>
            <div className="flex md:order-2">
                <Link href={"/login"} className="common-btn px-7 py-3" role="button"><span className="text flex items-center"><PlusCircleIcon className="h-4 rounded-sm me-2" />Login</span></Link>
                <button className="common-btn-2 mx-2 px-7 py-3" role="button"><span className="text flex items-center"><UserIcon className="h-4 rounded-sm me-2" />Sign Up</span></button>
                <Navbar.Toggle />
            </div>
            {/* <Navbar.Collapse>
                <Navbar.Link className="text-base text-black" href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link className="text-base text-black" href="#">About</Navbar.Link>
                <Navbar.Link className="text-base text-black" href="#">Services</Navbar.Link>
                <Navbar.Link className="text-base text-black" href="#">Pricing</Navbar.Link>
                <Navbar.Link className="text-base text-black" href="#">Contact</Navbar.Link>
            </Navbar.Collapse> */}
            <div>
                <Link className={`nav ${pathname == "/" ? "active" : ""} text-base mx-2 text-black`} href="/"> Home </Link>
                <Link href="/about" className={`nav ${pathname == "/about" ? "active" : ""} text-base mx-2 text-black`} > About </Link>
                <Link href="/services" className={`nav ${pathname == "/services" ? "active" : ""} text-base mx-2 text-black`} > Services </Link>
                <Link href="/pricing" className={`nav ${pathname == "/pricing" ? "active" : ""} text-base mx-2 text-black`} > Pricing </Link>
                <Link href="/contact" className={`nav ${pathname == "/contact" ? "active" : ""} text-base mx-2 text-black`} > Contact </Link>
            </div>
        </Navbar >
    );
}
