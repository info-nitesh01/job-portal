"use client";

import Bcrumb from "@/components/Bcrumb";
import FooterComponent from "@/components/FooterComponent";
import UserNav from "@/components/UserNav";
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import { fetchData } from "../../store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const breadCrumbPages: any = [{ page: "Home", link: "/" }, { page: "Posted Jobs", link: "/posted-jobs" }];

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
        filteredCandidates = userList.filter((user: any) => {
            return newData.appliedCandidates.includes(user.id);
        });
    }
    console.log(filteredCandidates);


    return (
        <>
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Applied Candidates</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Candidate List" />
            </div>
            <div className='grid grid-cols-4 mx-24 my-10'>
                {(filteredCandidates !== null && filteredCandidates !== undefined) ?
                    (filteredCandidates.length > 0) ?
                        filteredCandidates.map((item: any, i: number) => {
                            return <div key={i} className="rounded-none border-gray-300 shadow-md relative m-auto mb-20 p-0">
                                <img className="w-full" src={item.profile} alt="" />
                                <div className="bg-white absolute shadow-sm -bottom-12 w-11/12 hover:w-full transition-all -mt-14 p-3">
                                    <h1 className="font-semibold mb-1">{item.name}</h1>
                                    <h1 className="text-sm font-medium text-gray-400 mb-1">{item.jobtitle}</h1>
                                    <Link href={`/candidate-details?id=${item.id}`} className="text-theme-green text-sm flex items-center tracking-tight hover:tracking-wider transition-all">View Profile <ArrowRightIcon className="h-3" /></Link>
                                </div>
                            </div>
                        }
                        ) :
                        <img className="col-span-4 w-1/3 m-auto my-10" src="/assets/images/no-data.png" alt="" />
                    : <></>
                }
            </div>

            <FooterComponent />
        </>
    )
}