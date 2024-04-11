'use client'

import { fetchData } from '@/app/store/api/apiSlice'
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { Card } from 'flowbite-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function JobArea() {
    const router = useRouter()
    const dispatch = useDispatch<any>();
    const state: any = useSelector((state) => state);

    let jobListData: any = state.apiData.data;
    useEffect(() => {
        dispatch(fetchData("/jobList"))
    }, [])

    let data;
    if (jobListData !== null) { data = jobListData.slice(-4) }




    return (
        <div className='p-12 px-28 text-center'>
            <h1 className='text-4xl font-bold text-center'>Recent Jobs</h1>
            <div className='grid grid-cols-2 mt-5'>
                {(data !== null && data !== undefined) ?
                    data.map((item: any, i: number) => {
                        return <Card key={i} className="rounded-none border-gray-300 p-3 m-auto mb-5" horizontal >
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
                                    <button className="common-btn px-5 py-2 mb-2" role="button"><span>Apply</span></button>
                                    <p className="theme-btn2 px-4 py-2 text-white" role="button">Full Time</p>
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