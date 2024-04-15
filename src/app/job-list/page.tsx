"use client";

import Bcrumb from "@/components/Bcrumb";
import FooterComponent from "@/components/FooterComponent";
import UserNav from "@/components/UserNav";
import { AcademicCapIcon, ChevronRightIcon, InboxArrowDownIcon, MapPinIcon, PhoneIcon, StarIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { Card, Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import { fetchData, updateData } from "../store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ToastComponent from "@/components/ToastComponent";

const breadCrumbPages: any = [{ page: "Home", link: "/" }];

export default function JobList() {
    const [showToast, setshowToast] = useState({ toasttype: "", msg: "" })
    const dispatch = useDispatch<any>();
    const state: any = useSelector((state) => state);
    useEffect(() => {
        dispatch(fetchData("/jobList"))
    }, [])

    let jobListData: any = state.apiData.data;
    console.log(jobListData)
    let recentJobData = [];
    if (jobListData !== null) {
        let arrayForSort = [...jobListData]
        recentJobData = arrayForSort.reverse();
    }

    let userData: any = localStorage.getItem("userdata");
    const handleJobApply = (id: string) => {
        let curentBtn = document.getElementById(`btnApply${id}`);
        let filteredApiData = jobListData.filter((item: any) => { return item.id === id })
        let newData = JSON.parse(JSON.stringify(filteredApiData[0]));
        console.log(newData);
        newData.appliedCandidates.push(JSON.parse(userData).id);
        dispatch(updateData({ dataUrl: `/jobList/${id}`, appliedData: newData }));
        setshowToast({ toasttype: "success", msg: "Job Applied Successfully." });
        if (curentBtn !== null) curentBtn.innerHTML = "Applied";
    }
    return (
        <>
            {(showToast.toasttype !== "") ?
                <ToastComponent toastType={showToast.toasttype} msg={showToast.msg} />
                : <></>
            }
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Job List</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Job List" />
            </div>
            <Tabs aria-label="Pills" style="pills">
                <Tabs.Item active title="All">
                    <div className='grid grid-cols-2 mx-24'>
                        {(jobListData !== null && jobListData !== undefined) ?
                            jobListData.map((item: any, i: number) => {
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
                                            <button className="common-btn px-5 py-2 mb-2" onClick={() => handleJobApply(item.id)} role="button"><span id={`btnApply${item.id}`}>Apply</span></button>
                                            <p className="theme-btn2 px-4 py-2 text-white" role="button">Full Time</p>
                                        </div>
                                    </div>
                                </Card>
                            }
                            )
                            : <></>
                        }
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Recent">
                    <div className='grid grid-cols-2 mx-24'>
                        {(recentJobData !== null && recentJobData !== undefined) ?
                            recentJobData.map((item: any, i: number) => {
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
                                            <button className="common-btn px-5 py-2 mb-2" role="button" onClick={() => handleJobApply(item.id)}><span id={`btnApply${item.id}`}>Apply</span></button>
                                            <p className="theme-btn2 px-4 py-2 text-white" role="button">Full Time</p>
                                        </div>
                                    </div>
                                </Card>
                            }
                            )
                            : <></>
                        }
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Featured">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
                </Tabs.Item>
            </Tabs>
            <FooterComponent />
        </>
    )
}