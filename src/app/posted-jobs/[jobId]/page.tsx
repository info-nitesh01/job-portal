"use client";

import Bcrumb from "@/components/Bcrumb";
import FooterComponent from "@/components/FooterComponent";
import UserNav from "@/components/UserNav";
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { fetchData } from "../../store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const breadCrumbPages: any = [{ page: "Home", link: "/" }];

export default function JobID({ params }: { params: { jobId: string } }) {
    const dispatch = useDispatch<any>();
    const [jobList, setjobList] = useState([])
    const [userList, setuserList] = useState([])

    useEffect(() => {
        (async () => {
            const jobs = await dispatch(fetchData("/jobList"));
            setjobList(jobs.payload);
            const users = await dispatch(fetchData("/users"));
            setuserList(users.payload);
        })();
    }, [])

    let filteredApiData = jobList.filter((item: any) => { return item.id === params.jobId });
    let newData: any = filteredApiData[0];
    let filteredCandidates
    if (newData !== undefined) {
        console.log(newData.appliedCandidates)
        filteredCandidates = userList.filter((user: any) => newData.appliedCandidates.includes(user.id))
    }
    console.log(filteredCandidates);

    return (
        <>
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Applied Candidates</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Applied Candidates" />
            </div>
            <div className='grid grid-cols-4 mx-24 my-10'>
                {(jobList !== null && jobList !== undefined) ?
                    jobList.map((item: any, i: number) => {
                        return <div key={i} className="rounded-none border-gray-300 shadow-md relative m-auto mb-20 p-0">
                            <img className="w-full" src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/1.jpg" alt="" />
                            <div className="bg-white absolute shadow-sm -bottom-12 w-11/12 hover:w-full transition-all -mt-14 p-3">
                                <h1 className="font-semibold mb-1">Jerry Hudson</h1>
                                <h1 className="text-sm font-medium text-gray-400 mb-1">Business Consultant</h1>
                                <Link href="/candidate-details" className="text-theme-green text-sm flex items-center tracking-tight hover:tracking-wider transition-all">View Profile <ArrowRightIcon className="h-3" /></Link>
                            </div>
                        </div>
                    }
                    )
                    : <></>
                }
            </div>

            <FooterComponent />
        </>
    )
}