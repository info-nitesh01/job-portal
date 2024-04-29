"use client";

import Bcrumb from "@/components/Bcrumb";
import FooterComponent from "@/components/FooterComponent";
import UserNav from "@/components/UserNav";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { Card, Tabs } from "flowbite-react";
import { useEffect, useState } from "react";
import { fetchData, updateData } from "../store/api/apiSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import ToastComponent from "@/components/ToastComponent";
import { useRouter } from "next/navigation";
import Image from "next/image";

const breadCrumbPages: any = [{ page: "Home", link: "/" }];

export default function JobList() {
    const [showToast, setshowToast] = useState({ toasttype: "", msg: "" })
    const dispatch = useDispatch<any>();
    const [jobList, setjobList] = useState([])
    const router = useRouter()
    const [loading, setLoading] = useState(true);
    const [userData, setuserData]: any = useState()

    useEffect(() => {
        (async () => {
            const jobs = await dispatch(fetchData("/jobList"));
            setjobList(jobs.payload);
            setLoading(false)
            setuserData(localStorage.getItem('userdata'));
        })();
    }, [])

    let recentJobData: any = [];
    if (jobList !== null) {
        let arrayForSort = [...jobList]
        recentJobData = arrayForSort.reverse();
    }

    const handleJobApply = (id: string) => {
        if (userData !== undefined && userData !== null) {
            let curentBtn = document.getElementById(`btnApply${id}`);
            let filteredApiData = jobList.filter((item: any) => { return item.id === id })
            let newData = JSON.parse(JSON.stringify(filteredApiData[0]));
            newData.appliedCandidates.push(JSON.parse(userData).id);
            dispatch(updateData({ dataUrl: `/jobList/${id}`, appliedData: newData }));
            setshowToast({ toasttype: "success", msg: "Job Applied Successfully." });
            if (curentBtn !== null) curentBtn.innerHTML = "Applied";
        } else {
            router.push('/login')
        }
        setTimeout(() => {
            setshowToast({ toasttype: "", msg: "" });
        }, 3000);
    }
    return (
        <>
            {loading ? <div className="h-dvh w-full flex items-center justify-center"><span className="loader"></span></div> :
                <div>
                    {(showToast.toasttype !== "") ?
                        <ToastComponent toastType={showToast.toasttype} msg={showToast.msg} />
                        : <></>
                    }
                    {(userData !== undefined && userData !== null && JSON.parse(userData).usertype !== "employer") ?
                        <>
                            <UserNav />
                            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                                <h1 className='text-4xl font-extrabold text-white mb-6'>Job List</h1>
                                <Bcrumb prevpages={breadCrumbPages} lastPage="Job List" />
                            </div>
                            <Tabs aria-label="Pills" style="pills">
                                <Tabs.Item active title="All">
                                    <div className='grid lg:grid-cols-2 gap-2 mx-10 md:mx-24'>
                                        {(jobList !== null && jobList !== undefined) ?
                                            jobList.map((item: any, i: number) => {
                                                return <Card key={i} className="rounded-none border-gray-300 p-3 m-auto mb-5" horizontal >
                                                    <div className='grid md:grid-cols-5 text-center md:text-start'>
                                                        <Image height={100} width={100} src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/jobs/1.png" className='w-fit my-auto mx-auto md:ml-2' alt="" />
                                                        <div className='md:col-span-3 leading-10'>
                                                            <Link href="/job-details" className="text-xl font-bold tracking-tight text-gray-900"> {item.jobtitle} </Link>
                                                            <p className='text-theme-green font-medium'>{item.companyname}</p>
                                                            <p className='text-gray-500 text-sm font-medium flex items-center'><CurrencyDollarIcon className='mr-2 h-4 text-theme-green' />{item.minsal} - {item.maxsal}</p>
                                                            <p className='text-gray-500 text-sm font-medium flex items-start'><MapPinIcon className='mr-2 h-8 md:h-6 text-theme-green' />Location 210-27 Quadra, Market Street, Victoria Canada </p>
                                                        </div>
                                                        <div className='flex flex-col justify-center mt-2 md:mt-0'>
                                                            <button className="common-btn px-5 py-2 mb-2" onClick={() => handleJobApply(item.id)} role="button"><span id={`btnApply${item.id}`}>Apply</span></button>
                                                            <p className="theme-btn2 px-4 py-2 text-white text-center" role="button">{item.jobtype}</p>
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
                                    <div className='grid lg:grid-cols-2 gap-2 mx-10 md:mx-24'>
                                        {(recentJobData !== null && recentJobData !== undefined) ?
                                            recentJobData.map((item: any, i: number) => {
                                                return <Card key={i} className="rounded-none border-gray-300 p-3 m-auto mb-5" horizontal >
                                                    <div className='grid md:grid-cols-5 text-center md:text-start'>
                                                        <Image height={100} width={100} className='w-fit my-auto mx-auto md:ml-2' src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/jobs/1.png" alt="" />
                                                        <div className='md:col-span-3 leading-10'>
                                                            <Link href="/job-details" className="text-xl font-bold tracking-tight text-gray-900"> {item.jobtitle} </Link>
                                                            <p className='text-theme-green font-medium'>{item.companyname}</p>
                                                            <p className='text-gray-500 text-sm font-medium flex items-center'><CurrencyDollarIcon className='mr-2 h-4 text-theme-green' />{item.minsal} - {item.maxsal}</p>
                                                            <p className='text-gray-500 text-sm font-medium flex items-start'><MapPinIcon className='mr-2 h-8 md:h-6 text-theme-green' />Location 210-27 Quadra, Market Street, Victoria Canada </p>
                                                        </div>
                                                        <div className='flex flex-col justify-center mt-2 md:mt-0'>
                                                            <button className="common-btn px-5 py-2 mb-2" onClick={() => handleJobApply(item.id)} role="button"><span id={`btnApply${item.id}`}>Apply</span></button>
                                                            <p className="theme-btn2 px-4 py-2 text-white text-center" role="button">{item.jobtype}</p>
                                                        </div>
                                                    </div>
                                                </Card>
                                            }
                                            )
                                            : <></>
                                        }
                                    </div>
                                </Tabs.Item>
                            </Tabs>
                            <FooterComponent />
                        </>
                        :
                        <Image className="col-span-4 w-1/3 m-auto my-10" src="/assets/images/unauthorized-user.png" width={200} height={200} alt="" />
                    }
                </div>
            }
        </>
    )
}