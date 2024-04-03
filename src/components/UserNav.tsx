
"use client";

import { PlusCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import { Navbar } from "flowbite-react";

export default function UserNav() {
    return (
        <Navbar fluid rounded className="mx-5 md:mx-24 my-2">
            <Navbar.Brand href="/">
                <img src="https://templates.hibootstrap.com/gable/default/assets/img/logo.png" className="mr-3 h-12" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <button className="common-btn px-7 py-3" role="button"><span className="text flex items-center"><PlusCircleIcon className="h-4 rounded-sm me-2" />Login</span></button>
                <button className="common-btn-2 mx-2 px-7 py-3" role="button"><span className="text flex items-center"><UserIcon className="h-4 rounded-sm me-2" />Sign Up</span></button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="text-base text-black" href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link className="text-base text-black" to="#">About</Navbar.Link>
                <Navbar.Link className="text-base text-black" href="#">Services</Navbar.Link>
                <Navbar.Link className="text-base text-black" href="#">Pricing</Navbar.Link>
                <Navbar.Link className="text-base text-black" href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
