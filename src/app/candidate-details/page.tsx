"use client";

import Bcrumb from "@/components/Bcrumb";
import FooterComponent from "@/components/FooterComponent";
import UserNav from "@/components/UserNav";
import { ArrowDownTrayIcon, InboxArrowDownIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { fetchData } from "../store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import UserTimeline from "@/components/UserTimeline";

const breadCrumbPages: any = [{ page: "Home", link: "/" }];

export default function JobList() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch<any>();
    const state: any = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData("/users"))
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])

    const searchParams = useSearchParams()
    const userID = searchParams.get('id')

    let userListData: any = state.apiData.data;
    let filteredApiData: any;
    if (userListData !== null && userListData !== undefined) {
        filteredApiData = userListData.filter((item: any) => { return item.id === userID });
    }

    const handleDownloadCV = (fileName: string) => {
        const pdfUrl = 'http://localhost:3000/' + fileName;
        const anchor = document.createElement('a');
        anchor.href = pdfUrl;
        anchor.download = fileName;
        anchor.click();
    }
    return (
        <>
            {loading ? <div className="h-dvh w-full flex items-center justify-center"><span className="loader"></span></div>
                :
                <>
                    <div>
                        <UserNav />
                        <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                            <h1 className='text-4xl font-extrabold text-white mb-6'>Candidates Details</h1>
                            <Bcrumb prevpages={breadCrumbPages} lastPage="Candidates Details" />
                        </div>
                        {(filteredApiData !== null && filteredApiData !== undefined) ?
                            filteredApiData.map((item: any, id: number) =>
                                <>
                                    <div className="text-center my-5">
                                        <h1 className='text-4xl font-extrabold text-gray-800 mb-4 w-full'>{item.name}</h1>
                                        <h1 className='text-lg font-medium text-gray-400 mb-2 w-full'>{item.jobtitle}</h1>
                                        <h1 className='text-gray-500 mb-2 w-full'>Bachelor of Business Administation university of Gable</h1>
                                        {/* <ViewCVModal userid={item.id} /> */}
                                        <label onClick={() => handleDownloadCV(item.cv)} className="common-btn-2 mx-2 font-semibold px-10 py-3"><span className="text flex items-center">Download CV<ArrowDownTrayIcon className="h-5 rounded-sm ml-2" /></span></label>
                                    </div>
                                    <div key={id} className='grid grid-cols-1 md:grid-cols-12 mx-5 lg:mx-24 lg:my-20'>
                                        <div className=" md:col-span-5 shadow-lg">
                                            <img className="min-w-full" src={item.profile} alt="" />
                                            <div className="m-2 md:m-12 tracking-wider">
                                                <h5 className="text-2xl font-bold tracking-tight mb-5"><span className="pb-4"> Contact Info </span></h5>
                                                <div className="text-base text-gray-500 leading-8">
                                                    <Link href="#" className="flex text-xs md:text-base items-center hover:text-gray-800"><PhoneIcon className="h-6 text-theme-green me-2" />{item.phone}</Link>
                                                    <Link href="#" className="flex text-xs md:text-base items-center hover:text-gray-800"><InboxArrowDownIcon className="h-6 text-theme-green me-2" />{item.email}</Link>
                                                    <Link href="#" className="flex text-xs md:text-base items-center hover:text-gray-800"><MapPinIcon className="h-6 text-theme-green me-2" />{item.address}</Link>
                                                </div>
                                                <h5 className="text-2xl font-bold tracking-tight mb-5 mt-8"><span className="pb-4"> Social Links </span></h5>
                                                <div className="text-base text-gray-500 leading-8">
                                                    <Link href="https://www.facebook.com/" className="flex items-center hover:text-gray-800"><BsFacebook className="h-6 text-theme-green me-2" />{item.facebookLink}</Link>
                                                    <Link href="https://www.instagram.com/" className="flex items-center hover:text-gray-800"><BsInstagram className="h-6 text-theme-green me-2" />{item.instaLink}</Link>
                                                    <Link href="https://www.linkedin.com/" className="flex items-center hover:text-gray-800"><BsLinkedin className="h-6 text-theme-green me-2" />{item.dribblelink}</Link>
                                                    <Link href="https://www.twitter.com/" className="flex items-center hover:text-gray-800"><BsTwitter className="h-6 text-theme-green me-2" />{item.ldLink}</Link>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="mb-16 mx-2 md:mx-7 col-span-7">
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
                                            <UserTimeline />
                                        </div>
                                    </div >
                                </>
                            )
                            : <></>
                        }

                        <FooterComponent />
                    </div>
                </>
            }
        </>
    )
}