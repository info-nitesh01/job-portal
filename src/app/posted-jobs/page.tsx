"use client";

import Bcrumb from "@/components/Bcrumb";
import FooterComponent from "@/components/FooterComponent";
import UserNav from "@/components/UserNav";
import { MapPinIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { CurrencyDollarIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { fetchData } from "../store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const breadCrumbPages: any = [{ page: "Home", link: "/" }];

export default function PostedJobList() {
    const dispatch = useDispatch<any>();
    const state: any = useSelector((state) => state);
    let localData: any = localStorage.getItem('userdata')
    const [jobList, setjobList] = useState([])

    useEffect(() => {
        (async () => {
            const jobs = await dispatch(fetchData("/jobList"));
            setjobList(jobs.payload);
        })();
    }, [])

    let filteredApiData;
    if (jobList !== null && localData !== null) {
        filteredApiData = jobList.filter((item: any) => { return item.employerID === JSON.parse(localData).id })
    }
    return (
        <div className="text-center">
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Posted Jobs</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Posted Jobs" />
            </div>
            <h1 className="text-4xl font-extrabold my-10 text-center">Your Posted Jobs</h1>
            <div className='grid grid-cols-2 mx-24 mb-5'>
                {(filteredApiData !== null && filteredApiData !== undefined) ?
                    filteredApiData.map((item: any, i: number) => {
                        return <Card key={i} className="rounded-none text-start border-gray-300 m-auto mb-5" horizontal >
                            <div className='grid grid-cols-6'>
                                <img className='w-fit my-auto' src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/jobs/1.png" alt="" />
                                <div className='col-span-3 leading-10'>
                                    <Link href="/job-details" className="text-xl font-bold tracking-tight text-gray-900"> {item.jobtitle} </Link>
                                    <p className='text-theme-green font-medium'>{item.companyname}</p>
                                    <p className='text-gray-500 text-sm font-medium flex items-center'><CurrencyDollarIcon className='mr-2 h-4 text-theme-green' />{item.minsal} - {item.maxsal}</p>
                                    <p className='text-gray-500 text-sm font-medium flex items-start'><MapPinIcon className='mr-2 h-5 text-theme-green' />Location 210-27 Quadra, Market Street, Victoria Canada
                                    </p>
                                </div>
                                <div className='flex flex-col col-span-2 justify-center'>
                                    <Link href={`/posted-jobs/${item.id}`} className="common-btn px-5 py-2 mb-2 text-center" role="button"><span>Applied List</span></Link>
                                    <p className="theme-btn2 px-4 py-2 text-white text-center" role="button">{item.jobtype}</p>
                                </div>
                            </div>
                        </Card>
                    }
                    )
                    : <></>
                }
            </div>
            <Link href={'/post-job'} className="common-btn-2 w-fit px-7 py-3 m-auto mb-10" role="button"> <span className="flex items-center"><PlusIcon className="h-5 mr-2" /> Post a New Job</span></Link>

            <FooterComponent />
        </div>
    )
}