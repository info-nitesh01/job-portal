
"use client";

import { ChevronRightIcon, InboxArrowDownIcon, MapPinIcon, MinusIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { Footer } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function FooterComponent() {
    return (
        <Footer className="bg-theme-green rounded-none lg:px-24 text-center md:text-start">
            <div className="w-full">
                <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <Link href="/">
                            <Image height={100} width={100} src="https://templates.hibootstrap.com/gable/default/assets/img/logo-two.png" className="mx-auto w-auto md:ml-0 h-14 mb-5" alt="Flowbite React Logo" />
                        </Link>
                        <Footer.LinkGroup col className="text-white">
                            <p className="leading-7 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="flex items-center justify-between md:w-2/3">
                                <Footer.Icon href="#" icon={BsFacebook} className="text-white hover:text-gray-800" />
                                <Footer.Icon href="#" icon={BsInstagram} className="text-white hover:text-gray-800" />
                                <Footer.Icon href="#" icon={BsTwitter} className="text-white hover:text-gray-800" />
                                <Footer.Icon href="#" icon={BsGithub} className="text-white hover:text-gray-800" />
                                <Footer.Icon href="#" icon={BsDribbble} className="text-white hover:text-gray-800" />
                            </div>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-white border-b border-white mb-5 pb-4"><span className="border-b-4 pb-4 border-white"> Category </span></h5>
                        <Footer.LinkGroup col className="text-white text-base">
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />Development</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />Business</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />Tech & IT</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />Networking</Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-white border-b border-white mb-5 pb-4"><span className="border-b-4 pb-4 border-white"> Quick Links </span></h5>
                        <Footer.LinkGroup col className="text-white text-base">
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />Home</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />About Us</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />Blogs</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />Companies</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><ChevronRightIcon className="h-5" />Testimonials</Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-white border-b border-white mb-5 pb-4"><span className="border-b-4 pb-4 border-white"> Find Us </span></h5>
                        <Footer.LinkGroup col className="text-white text-base">
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><MapPinIcon className="h-5 me-1" /> 28/A Street, New York City</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><PhoneIcon className="h-5 me-1" />+88 0123 456 789</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800 m-auto md:m-0"><InboxArrowDownIcon className="h-5 me-1" />hello@gable.com</Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-theme-green px-4 py-6 sm:flex sm:items-center sm:justify-between border-t">
                    <Footer.Copyright href="#" by="" year={2024} className="text-white" />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center items-center">
                        <Link href="#" className="flex items-center text-white hover:text-gray-800">Terms & Conditions </Link>
                        <MinusIcon className="text-white h-4 w-4" />
                        <Link href="#" className="flex items-center text-white hover:text-gray-800">Privacy Policy </Link>
                    </div>
                </div>
            </div>
        </Footer>
    );
}
