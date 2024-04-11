
"use client";

import { PlusCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function UserNav() {
    const pathname = usePathname();
    let userData: any = localStorage.getItem('userdata');
    let uData = JSON.parse(userData)
    const router = useRouter()

    const handleSignout = () => {
        localStorage.removeItem('userdata');
        router.push('/login')
    }
    return (
        <Navbar fluid rounded className="px-5 md:px-24 py-5 shadow-md">
            <Link href="/">
                <img src="https://templates.hibootstrap.com/gable/default/assets/img/logo.png" className="mr-3 h-12" alt="Flowbite React Logo" />
            </Link>
            {(userData !== null) ?
                <div className="flex md:order-2">
                    <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://pngset.com/images/default-profile-picture-circle-symbol-logo-trademark-number-transparent-png-890174.png" rounded />} >
                        <Dropdown.Header>
                            <span className="block text-sm">{(uData.name)}</span>
                            <span className="block truncate text-sm font-medium">{uData.email}</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                :
                <div className="flex md:order-2">
                    <Link href={"/login"} className="common-btn px-7 py-3" ><span className="text flex items-center"><PlusCircleIcon className="h-4 rounded-sm me-2" />Login</span></Link>
                    <Link href={"/signup"} className="common-btn-2 mx-2 px-7 py-3"><span className="text flex items-center"><UserIcon className="h-4 rounded-sm me-2" />Sign Up</span></Link>
                    <Navbar.Toggle />
                </div>
            }
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
