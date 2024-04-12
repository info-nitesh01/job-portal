
"use client";

import { ArrowRightIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/16/solid";
import { Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import ToastComponent from "./ToastComponent";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function LoginModal(props: any) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [openModal, setOpenModal] = useState(false);
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("");
    const [login, setlogin] = useState(false)
    const [emailError, setemailError] = useState("hidden")
    const [passError, setpassError] = useState("hidden")
    const [showToast, setshowToast] = useState({ toasttype: "", msg: "" })
    const router = useRouter()


    const handleLogin = () => {
        fetch(apiUrl + '/users')
            .then(response => response.json())
            .then(users => {
                let filteredApiData = users.filter((item: any) => { return item.email === email })
                if (filteredApiData.length === 0) {
                    setemailError("");
                    setlogin(false);
                } else {
                    if (filteredApiData[0].password !== password) {
                        setpassError("");
                        setlogin(false);
                    } else if (filteredApiData[0].usertype !== props.userType.toLowerCase()) {
                        setshowToast({ toasttype: "warning", msg: "Not authorized to sign in as " + props.userType + "!" });
                        // setemail("");
                        // setpassword("");
                    } else {
                        let data: any = { id: filteredApiData[0].id, name: filteredApiData[0].name, email: filteredApiData[0].email }
                        setshowToast({ toasttype: "success", msg: "Logged in Successfully." })
                        setlogin(true);
                        localStorage.setItem("userdata", JSON.stringify(data));
                        setemail("");
                        setpassword("");
                        setOpenModal(false);
                        if (filteredApiData[0].usertype === 'candidate')
                            router.push('/')
                        else
                            router.push('/posted-jobs')
                    }
                }
            });
        setTimeout(() => {
            setshowToast({ toasttype: "", msg: "" });
        }, 3000);
    }

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
            {(showToast.toasttype !== "") ?
                <ToastComponent toastType={showToast.toasttype} msg={showToast.msg} />
                : <></>
            }
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in as {props.userType}</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="login-email" value="Your email" />
                            </div>
                            <TextInput id="login-email" onChange={(e) => { setemail(e.target.value); setemailError("hidden") }} value={email} placeholder="name@company.com" required />
                            <p className={`text-xs text-red-600 ml-1 flex items-center ${emailError}`}><InformationCircleIcon className="h-3 mr-1" />Email is not valid.</p>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="login-password" value="Your password" />
                            </div>
                            <TextInput id="login-password" onChange={(e) => { setpassword(e.target.value); setpassError("hidden") }} value={password} type="password" placeholder="********" required />
                            <p className={`text-xs text-red-600 ml-1 flex items-center ${passError}`}><InformationCircleIcon className="h-3 mr-1" />Password is not valid.</p>
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
                            <button className="common-btn mx-2 px-7 py-3" onClick={handleLogin}><span>Log in to your account</span></button>
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
