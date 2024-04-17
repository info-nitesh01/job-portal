'use client'

import Bcrumb from '@/components/Bcrumb'
import FooterComponent from '@/components/FooterComponent'
import ToastComponent from '@/components/ToastComponent'
import UserNav from '@/components/UserNav'
import { Label, Radio, TextInput, Textarea } from 'flowbite-react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postData } from '../store/api/apiSlice'
import { useRouter } from 'next/navigation'

const breadCrumbPages: any = [{ page: "Home", link: "/" }];
export default function PostJobPage() {
    const [showToast, setshowToast] = useState({ toasttype: "", msg: "" })
    const [jobTitle, setjobTitle] = useState('');
    const [jobCategory, setjobCategory] = useState('IT & Technology');
    const [email, setemail] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [companyDomain, setcompanyDomain] = useState('');
    const [Vacancies, setVacancies] = useState('');
    const [minSal, setminSal] = useState('');
    const [maxSal, setmaxSal] = useState('');
    const [location, setlocation] = useState('');
    const [jobtype, setjobtype] = useState('Full Time');
    const [jobDescription, setjobDescription] = useState('');
    const [currency, setcurrency] = useState("$")
    const dispatch = useDispatch<any>();
    const router = useRouter()
    let localData: any = localStorage.getItem('userdata')
    const handlePostJob = () => {
        let postJobData = {
            "employerID": JSON.parse(localData).id,
            "jobtitle": jobTitle,
            "jobcategory": jobCategory,
            "email": email,
            "companyname": companyName,
            "companydomain": companyDomain,
            "vacancies": Vacancies,
            "minsal": currency + minSal,
            "maxsal": currency + maxSal,
            "location": location,
            "jobtype": jobtype,
            "jobdescription": jobDescription,
            "appliedCandidates": [],
            "logo": ""
        }

        if ((jobTitle && email && companyName && Vacancies && minSal && maxSal && location && jobtype && jobDescription) !== "") {
            setshowToast({ toasttype: "success", msg: "Job Posted Successfully." })
            dispatch(postData({ userdata: postJobData, dbName: "/jobList" }))
            { setjobTitle(""); setemail(""); setjobCategory("IT & Technology"); setemail(""); setcompanyName(""); setVacancies(""); setminSal(""); setmaxSal(""); setlocation(""); setjobtype(""); setjobDescription(""); }
        } else {
            setshowToast({ toasttype: "warning", msg: "Please fill all the mandatory details!" })
        }
        setTimeout(() => {
            setshowToast({ toasttype: "", msg: "" });
        }, 3000);
        router.push('/posted-jobs')
    }

    return (
        <>
            {(showToast.toasttype !== "") ?
                <ToastComponent toastType={showToast.toasttype} msg={showToast.msg} />
                : <></>
            }
            {(localData !== undefined && localData !== null && JSON.parse(localData).usertype !== "candidate") ?
                <>
                    <UserNav />
                    <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                        <h1 className='text-4xl font-extrabold text-white mb-6'>Post A Job</h1>
                        <Bcrumb prevpages={breadCrumbPages} lastPage="Post A Job" />
                    </div>
                    <h1 className='text-4xl p-8 pb-0 font-extrabold text-center mb-12'>Post Your Job</h1>
                    <div className='border p-2 md:p-10 mx-5 md:mx-10 lg:mx-24 mb-14'>
                        <div className='md:grid md:grid-cols-2 md:gap-5'>
                            <div>
                                <Label htmlFor="postjob-jobtitle" className='text-gray-400 text-base' value="Job Title" />
                                <TextInput onChange={(e) => setjobTitle(e.target.value)} value={jobTitle} id="postjob-jobtitle" className='mt-2 text-gray-500' placeholder="UI/UX Designer" required style={{ padding: '15px' }} />
                            </div>
                            <div>
                                <Label htmlFor="postjob-jobcategory" className='text-gray-400 text-base' value="Job Category" />
                                <select id="postjob-jobcategory" onChange={(e) => setjobCategory(e.target.value)} defaultValue={jobCategory} className='border-gray-300 mt-2 text-gray-500'>
                                    <option value="IT & Technology" selected>IT & Technology</option>
                                    <option value="Web Developer">Web Developer</option>
                                    <option value="UX/UI Design">UX/UI Design</option>
                                    <option value="SEO">SEO</option>
                                </select>
                            </div>
                            <div>
                                <Label htmlFor="signup-email" className='text-gray-400 text-base' value="Your email" />
                                <TextInput onChange={(e) => setemail(e.target.value)} value={email} id="signup-email" className='mt-2 text-gray-500' placeholder="name@company.com" required style={{ padding: '15px' }} />
                            </div>
                            <div>
                                <Label htmlFor="postjob-companyname" className='text-gray-400 text-base' value="Company Name" />
                                <TextInput onChange={(e) => setcompanyName(e.target.value)} value={companyName} id="postjob-companyname" className='mt-2 text-gray-500' placeholder="Winbrains Tech" required style={{ padding: '15px' }} />
                            </div>
                            <div>
                                <Label htmlFor="postjob-companydomain" className='text-gray-400 text-base' value="Company Domain" />
                                <TextInput onChange={(e) => setcompanyDomain(e.target.value)} value={companyDomain} id="postjob-companydomain" className='mt-2 text-gray-500' placeholder="Winbrains.com" required style={{ padding: '15px' }} />
                            </div>
                            <div>
                                <Label htmlFor="postjob-vacancies" className='text-gray-400 text-base' value="Vacancies" />
                                <TextInput onChange={(e) => setVacancies(e.target.value)} value={Vacancies} id="postjob-vacancies" className='mt-2 text-gray-500' placeholder="10" required style={{ padding: '15px' }} />
                            </div>
                            <div>
                                <Label htmlFor="postjob-salary" className='text-gray-400 text-base' value="Salary" />
                                <div className='flex items-end text-gray-500'>
                                    <TextInput onChange={(e) => setminSal(e.target.value)} value={minSal} id="postjob-salary" className='mt-2 w-40 mx-1' placeholder="5000" required style={{ padding: '15px' }} />
                                    <select className='border-gray-300 text-gray-400' onChange={(e) => setcurrency(e.target.value)} value={currency} id="" style={{ width: "fit-content", height: "40px" }}>
                                        <option value="$">$</option>
                                        <option value="₹">₹</option>
                                        <option value="€">€</option>
                                    </select>
                                    <span className='mx-2 text-black'>to</span>
                                    <TextInput onChange={(e) => setmaxSal(e.target.value)} value={maxSal} id="postjob-salary" className='mt-2 w-40 mx-1' placeholder="25000" required style={{ padding: '15px' }} />
                                    <select className='border-gray-300 text-gray-400' value={currency} onChange={(e) => setcurrency(e.target.value)} id="" style={{ width: "fit-content", height: "40px" }}>
                                        <option value="$">$</option>
                                        <option value="₹">₹</option>
                                        <option value="€">€</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="postjob-location" className='text-gray-400 text-base' value="Location" />
                                <TextInput onChange={(e) => setlocation(e.target.value)} value={location} id="postjob-location" className='mt-2 text-gray-500' placeholder="28/A Street, New York City" required style={{ padding: '15px' }} />
                            </div>
                            <div className='col-span-2'>
                                <Label htmlFor="postjob-jobtype" className='text-gray-400 text-base' value="Job Type" />
                                <div className='flex items-center mt-2'>
                                    <Radio id="fulltime" name="jobtype" className='mr-1' onChange={(e) => setjobtype(e.target.value)} value="Full Time" defaultChecked /> <label className='text-gray-500' htmlFor="fulltime">Full Time</label>
                                    <Radio className='ml-5 mr-1' onChange={(e) => setjobtype(e.target.value)} value="Part Time" id="parttime" name="jobtype" /> <label className='text-gray-500' htmlFor="parttime">Part Time</label>
                                    <Radio className='ml-5 mr-1' onChange={(e) => setjobtype(e.target.value)} value="Intern" id="intern" name="jobtype" /> <label className='text-gray-500' htmlFor="intern">Intern</label>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <Label htmlFor="postjob-description" className='text-gray-400 text-base' value="Job Description" />
                            <Textarea onChange={(e) => setjobDescription(e.target.value)} value={jobDescription} rows={6} id="postjob-description" className='mt-2 text-gray-500' required style={{ padding: '15px' }} />
                        </div>
                        <button onClick={handlePostJob} className="theme-btn2 px-10 py-4 mb-2 mt-10 w-fit text-white font-base flex text-lg items-center" role="button"> Post </button>
                    </div>
                    <FooterComponent />
                </>
                :
                <img className="col-span-4 w-1/3 m-auto my-10" src="/assets/images/unauthorized-user.png" alt="" />
            }
        </>
    )
}