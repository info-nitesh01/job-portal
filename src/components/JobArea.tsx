'use client'

import { fetchData, updateData } from '@/app/store/api/apiSlice'
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { Card } from 'flowbite-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToastComponent from './ToastComponent'

export default function JobArea() {
    const [showToast, setshowToast] = useState({ toasttype: "", msg: "" })
    const router = useRouter()
    const dispatch = useDispatch<any>();
    const [jobList, setjobList] = useState([])

    useEffect(() => {
        (async () => {
            const jobs = await dispatch(fetchData("/jobList"));
            setjobList(jobs.payload);
        })();
    }, [])

    let data;
    if (jobList !== null) { data = jobList.slice(-4) }
    let userData: any = localStorage.getItem("userdata");
    const handleJobApply = (id: string) => {
        if (userData !== undefined && userData !== null) {
            let curentBtn = document.getElementById(`btnApply${id}`);
            let filteredApiData = jobList.filter((item: any) => { return item.id === id })
            let newData = JSON.parse(JSON.stringify(filteredApiData[0]));
            console.log(newData);
            newData.appliedCandidates.push(JSON.parse(userData).id);
            dispatch(updateData({ dataUrl: `/jobList/${id}`, appliedData: newData }));
            setshowToast({ toasttype: "success", msg: "Job Applied Successfully." });
            if (curentBtn !== null) curentBtn.innerHTML = "Applied";
        } else {
            router.push('/login')
        }
    }

    return (
        <div className='p-12 px-28 text-center'>
            {(showToast.toasttype !== "") ?
                <ToastComponent toastType={showToast.toasttype} msg={showToast.msg} />
                : <></>
            }
            <h1 className='text-4xl font-bold text-center'>Recent Jobs</h1>
            <div className='grid grid-cols-2 mt-5'>
                {(data !== null && data !== undefined) ?
                    data.map((item: any, i: number) => {
                        return <Card key={i} className="rounded-none border-gray-300 p-3 m-auto mb-5 text-start" horizontal >
                            <div className='grid grid-cols-5'>
                                <img className='w-fit my-auto' src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/jobs/1.png" alt="" />
                                <div className='col-span-3 leading-10'>
                                    <Link href="/job-details" className="text-xl font-bold tracking-tight text-gray-900"> {item.jobtitle} </Link>
                                    <p className='text-theme-green font-medium'>{item.companyname}</p>
                                    <p className='text-gray-500 text-sm font-medium flex items-center'><CurrencyDollarIcon className='mr-2 h-4 text-theme-green' />{item.minsal} - {item.maxsal}</p>
                                    <p className='text-gray-500 text-sm font-medium flex items-start'><MapPinIcon className='mr-2 h-5 text-theme-green' />Location 210-27 Quadra, Market Street, Victoria Canada
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <button className="common-btn px-5 py-2 mb-2" role="button" onClick={() => handleJobApply(item.id)}><span id={`btnApply${item.id}`}>Apply</span></button>
                                    <p className="theme-btn2 px-4 py-2 text-white text-center" role="button">{item.jobtype}</p>
                                </div>
                            </div>
                        </Card>
                    }
                    )
                    : <></>
                }
            </div>
            <Link href={"/job-list"} className="common-btn-2 ms-auto w-fit px-7 py-3"><span className="text flex items-center">Load More...</span></Link>
        </div >
    )
}