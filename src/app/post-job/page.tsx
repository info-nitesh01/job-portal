'use client'

import Bcrumb from '@/components/Bcrumb'
import FooterComponent from '@/components/FooterComponent'
import UserNav from '@/components/UserNav'
import { Label, Radio, TextInput, Textarea } from 'flowbite-react'
import React from 'react'

const breadCrumbPages: any = [{ page: "Home", link: "/" }];
export default function PostJobPage() {
    return (
        <>
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Post A Job</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Post A Job" />
            </div>
            <h1 className='text-4xl p-8 pb-0 font-extrabold text-center mb-12'>Post Your Job</h1>
            <div className='border p-10 mx-24 mb-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <Label htmlFor="postjob-jobtitle" className='text-gray-400 text-base' value="Job Title" />
                        <TextInput id="postjob-jobtitle" className='mt-2' placeholder="UI/UX Designer" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-email" className='text-gray-400 text-base' value="Your email" />
                        <TextInput id="signup-email" className='mt-2' placeholder="name@company.com" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="postjob-companyname" className='text-gray-400 text-base' value="Company Name" />
                        <TextInput id="postjob-companyname" className='mt-2' placeholder="Winbrains.com" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="postjob-vacancies" className='text-gray-400 text-base' value="Vacancies" />
                        <TextInput id="postjob-vacancies" className='mt-2' placeholder="10" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="postjob-location" className='text-gray-400 text-base' value="Location" />
                        <TextInput id="postjob-location" className='mt-2' placeholder="28/A Street, New York City" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-address" className='text-gray-400 text-base' value="Address" />
                        <TextInput id="signup-address" className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div className='mt-5'>
                        <Label htmlFor="postjob-jobtype" className='text-gray-400 text-base' value="Job Type" />
                        <div className='flex items-center mt-3'>
                            <Radio id="fulltime" name="jobtype" className='mr-1' defaultChecked /> <label htmlFor="fulltime">Full Time</label>
                            <Radio className='ml-5 mr-1' id="parttime" name="jobtype" /> <label htmlFor="parttime">Part Time</label>
                            <Radio className='ml-5 mr-1' id="intern" name="jobtype" /> <label htmlFor="intern">Intern</label>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <Label htmlFor="postjob-description" className='text-gray-400 text-base' value="Job Description" />
                    <Textarea rows={6} id="postjob-description" className='mt-2' required style={{ padding: '15px' }} />
                </div>
                <button className="theme-btn2 px-10 py-4 mb-2 mt-10 w-fit text-white font-base flex text-lg items-center" role="button"> Post </button>
            </div>
            <FooterComponent />
        </>
    )
}