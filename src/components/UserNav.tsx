
"use client";

import { PlusCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserNav() {
    const pathname = usePathname();
    const [userData, setuserData]: any = useState()

    useEffect(() => {
        setuserData(JSON.parse(localStorage.getItem('userdata') as any));
    }, [])

    const [defaultProf, setdefaultProf] = useState("https://pngset.com/images/default-profile-picture-circle-symbol-logo-trademark-number-transparent-png-890174.png")
    const router = useRouter()

    const handleSignout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('userdata');
        }
        router.push('/login')
    }
    return (
        <Navbar fluid rounded className="px-5 lg:px-24 py-5 shadow-md">
            <Link href="/">
                <img src="https://templates.hibootstrap.com/gable/default/assets/img/logo.png" className="mr-3 h-12" alt="Flowbite React Logo" />
            </Link>
            {(userData !== null && userData !== undefined) ?
                <div className="flex md:order-2">
                    <Dropdown arrowIcon={false} inline label={<><Avatar alt="User settings" className="border-2 rounded-full border-theme-green" img={defaultProf} rounded /><span className="block ml-1 text-lg font-semibold">{userData.name}</span></>} >
                        <Dropdown.Header className="text-center">
                            <img className="h-14 m-auto rounded-full border-2 border-theme-green" src={defaultProf} alt="" />
                            <span className="block ml-1 text-lg font-semibold">{userData.name}</span>
                            <span className="block truncate text-sm font-medium">{userData.email}</span>
                        </Dropdown.Header>
                        <Dropdown.Item><Link href={"/profile"}>Profile</Link ></Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                :
                <div className="flex md:order-2 md:ml-auto lg:ml-0">
                    <Link href={"/login"} className="common-btn px-2 md:px-7 py-3 h-fit" ><span className="text flex items-center"><PlusCircleIcon className="h-4 rounded-sm me-2 hidden md:block" />Login</span></Link>
                    <Link href={"/signup"} className="common-btn-2 ms-2 px-2 md:px-7 py-3 h-fit"><span className="text flex items-center"><UserIcon className="h-4 rounded-sm me-2 hidden md:block" />Sign Up</span></Link>
                    <Navbar.Toggle />
                </div>
            }
            <Navbar.Collapse className="text-center">
                <Navbar.Link><Link className={`nav ${pathname == "/" ? "active" : ""} text-base mx-2 text-black`} href="/"> Home </Link> </Navbar.Link>
                <Navbar.Link><Link href="/job-list" className={`nav ${pathname == "/job-list" ? "active" : ""} text-base mx-2 text-black`} > All Jobs </Link></Navbar.Link>
                <Navbar.Link><Link href="/services" className={`nav ${pathname == "/services" ? "active" : ""} text-base mx-2 text-black`} > Services </Link></Navbar.Link>
                <Navbar.Link><Link href="/pricing" className={`nav ${pathname == "/pricing" ? "active" : ""} text-base mx-2 text-black`} > Pricing </Link></Navbar.Link>
                <Navbar.Link><Link href="/contact" className={`nav ${pathname == "/contact" ? "active" : ""} text-base mx-2 text-black`} > Contact </Link></Navbar.Link>
            </Navbar.Collapse>
            {/* <div>
                <Link className={`nav ${pathname == "/" ? "active" : ""} text-base mx-2 text-black`} href="/"> Home </Link>
                <Link href="/job-list" className={`nav ${pathname == "/job-list" ? "active" : ""} text-base mx-2 text-black`} > All Jobs </Link>
                <Link href="/services" className={`nav ${pathname == "/services" ? "active" : ""} text-base mx-2 text-black`} > Services </Link>
                <Link href="/pricing" className={`nav ${pathname == "/pricing" ? "active" : ""} text-base mx-2 text-black`} > Pricing </Link>
                <Link href="/contact" className={`nav ${pathname == "/contact" ? "active" : ""} text-base mx-2 text-black`} > Contact </Link>
            </div> */}
        </Navbar >
    );
}
