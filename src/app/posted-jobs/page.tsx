"use client";

import Bcrumb from "@/components/Bcrumb";
import FooterComponent from "@/components/FooterComponent";
import UserNav from "@/components/UserNav";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { Card } from "flowbite-react";
import { useEffect } from "react";
import { fetchData } from "../store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const breadCrumbPages: any = [{ page: "Home", link: "/" }];

export default function PostedJobList() {
    const dispatch = useDispatch<any>();
    const state: any = useSelector((state) => state);
    let localData: any = localStorage.getItem('userdata')
    useEffect(() => {
        dispatch(fetchData("/jobList"))
    }, [])

    let jobListData: any = state.apiData.data;
    let filteredApiData;
    if (jobListData !== null && localData !== null) {
        filteredApiData = jobListData.filter((item: any) => { return item.employerID === JSON.parse(localData).id })
    }

    let id = 122;
    return (
        <>
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Posted Jobs</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Posted Jobs" />
            </div>
            <h1 className="text-4xl font-extrabold my-10 text-center">Your Posted Jobs</h1>
            <div className='grid grid-cols-2 mx-24 mb-10'>
                {(filteredApiData !== null && filteredApiData !== undefined) ?
                    filteredApiData.map((item: any, i: number) => {
                        return <Card key={i} className="rounded-none border-gray-300 m-auto mb-5" horizontal >
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
                                    <Link href={`/candidate-list/?id=${id}`} className="common-btn px-5 py-2 mb-2" role="button"><span>Applied List</span></Link>
                                    <p className="theme-btn2 px-4 py-2 text-white text-center" role="button">Full Time</p>
                                </div>
                            </div>
                        </Card>
                    }
                    )
                    : <></>
                }
            </div>

            <FooterComponent />
        </>
    )
}