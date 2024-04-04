
"use client";

import { ArrowRightIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/16/solid";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";

export default function LoginModal(props: any) {
    const [openModal, setOpenModal] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            {(props.userType === 'Candidate') ?
                <button onClick={() => setOpenModal(true)} className="theme-btn2 p-10 mb-2 w-1/2 text-white flex items-center mx-2" role="button">
                    <MagnifyingGlassIcon className='h-10' />
                    <div className='text-start ml-5'>
                        <p className='mb-2'>Candidate</p>
                        <h1 className='text-2xl font-bold'>Login as a Candidate</h1>
                    </div>
                    <p className='ms-auto flex items-center'>Get Started<ArrowRightIcon className='h-5 ml-2' /></p>
                </button> :
                <button onClick={() => setOpenModal(true)} className="theme-btn2 p-10 mb-2 w-1/2 text-white flex items-center mx-2" role="button">
                    <UserIcon className='h-10' />
                    <div className='text-start ml-5'>
                        <p className='mb-2'>Employer</p>
                        <h1 className='text-2xl font-bold'>Login as a Employer</h1>
                    </div>
                    <p className='ms-auto flex items-center'>Get Started<ArrowRightIcon className='h-5 ml-2' /></p>
                </button>
            }
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in as {props.userType}</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="login-email" value="Your email" />
                            </div>
                            <TextInput id="login-email" ref={emailInputRef} placeholder="name@company.com" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="login-password" value="Your password" />
                            </div>
                            <TextInput id="login-password" type="password" placeholder="********" required />
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-sm text-theme-green hover:underline">
                                Lost Password?
                            </a>
                        </div>
                        <div className="w-full">
                            <button className="common-btn mx-2 px-7 py-3"><span>Log in to your account</span></button>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-500">
                            Not registered?&nbsp;
                            <a href="#" className="text-theme-green hover:underline">
                                Create account
                            </a>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
