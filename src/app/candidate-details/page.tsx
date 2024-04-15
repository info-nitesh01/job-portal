"use client";

import Bcrumb from "@/components/Bcrumb";
import FooterComponent from "@/components/FooterComponent";
import UserNav from "@/components/UserNav";
import { ArrowDownTrayIcon, ArrowRightIcon, EyeIcon, InboxArrowDownIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import { fetchData } from "../store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/solid";
import UserTimeline from "@/components/UserTimeline";

const breadCrumbPages: any = [{ page: "Home", link: "/" }];

export default function JobList() {
    const dispatch = useDispatch<any>();
    const state: any = useSelector((state) => state);
    let localData: any = localStorage.getItem('userdata')
    useEffect(() => {
        dispatch(fetchData("/jobList"))
    }, [])

    const searchParams = useSearchParams()
    const search = searchParams.get('id')

    console.log(search)

    let jobListData: any = state.apiData.data;

    return (
        <>
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Candidates Details</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Candidates Details" />
            </div>
            <div className='grid grid-cols-12 mx-24 my-20'>
                <div className="col-span-5 shadow-lg">
                    <img className="min-w-full" src="https://templates.hibootstrap.com/gable/default/assets/img/single-profile/2.jpg" alt="" />
                    <div className="m-12 tracking-wider">
                        <h5 className="text-2xl font-bold tracking-tight mb-5"><span className="pb-4"> Contact Info </span></h5>
                        <div className="text-base text-gray-500 leading-8">
                            <Link href="#" className="flex items-center hover:text-gray-800"><PhoneIcon className="h-6 text-theme-green me-2" />+88 0123 456 789</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800"><InboxArrowDownIcon className="h-6 text-theme-green me-2" />hello@gable.com</Link>
                            <Link href="#" className="flex items-center hover:text-gray-800"><MapPinIcon className="h-6 text-theme-green me-2" /> 28/A Street, New York City</Link>
                        </div>
                        <h5 className="text-2xl font-bold tracking-tight mb-5 mt-8"><span className="pb-4"> Social Links </span></h5>
                        <div className="text-base text-gray-500 leading-8">
                            <Link href="https://www.facebook.com/" className="flex items-center hover:text-gray-800"><BsFacebook className="h-6 text-theme-green me-2" />https://www.facebook.com/</Link>
                            <Link href="https://www.instagram.com/" className="flex items-center hover:text-gray-800"><BsInstagram className="h-6 text-theme-green me-2" />https://www.instagram.com/</Link>
                            <Link href="https://www.linkedin.com/" className="flex items-center hover:text-gray-800"><BsLinkedin className="h-6 text-theme-green me-2" /> https://www.linkedin.com/</Link>
                            <Link href="https://www.twitter.com/" className="flex items-center hover:text-gray-800"><BsTwitter className="h-6 text-theme-green me-2" /> https://www.twitter.com/</Link>
                        </div>
                        <h5 className="text-2xl font-bold tracking-tight mb-5 mt-8"><span className="pb-4"> My Skills </span></h5>
                        <div className="text-base text-gray-500 leading-8">
                            <div className="h-2 bg-gray-400 min-w-full flex items-start relative mt-14">
                                <div className="h-2 bg-theme-green" style={{ width: '65%' }}></div><span className="-mt-10 absolute left-0">Frontend Design</span><span className="-mt-10 -ms-2">65%</span>
                            </div>
                            <div className="h-2 bg-gray-400 min-w-full flex items-start relative mt-14">
                                <div className="h-2 bg-theme-green" style={{ width: '90%' }}></div><span className="-mt-10 absolute left-0">Software Development </span><span className="-mt-10 -ms-2">90%</span>
                            </div>
                            <div className="h-2 bg-gray-400 min-w-full flex items-start relative mt-14">
                                <div className="h-2 bg-theme-green" style={{ width: '75%' }}></div><span className="-mt-10 absolute left-0">UI/UX Design</span><span className="-mt-10 -ms-2">75%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-16 mx-7 col-span-7">
                    <h1 className='text-4xl font-extrabold text-gray-800 mb-4 w-full'>Jac Jacson</h1>
                    <h1 className='text-lg font-medium text-gray-400 mb-2 w-full'>Web Consultant</h1>
                    <h1 className='text-gray-500 mb-2 w-full'>Bachelor of Business Administation university of Gable</h1>
                    <Link href={""} className="common-btn-2 mr-2 font-semibold px-10 py-3" ><span className="text flex items-center">View CV<EyeIcon className="h-5 rounded-sm ml-2" /></span></Link>
                    <Link href={""} className="common-btn-2 mx-2 font-semibold px-10 py-3"><span className="text flex items-center">Download CV<ArrowDownTrayIcon className="h-5 rounded-sm ml-2" /></span></Link>
                    <UserTimeline />
                </div>
            </div>

            <FooterComponent />
        </>
    )
}