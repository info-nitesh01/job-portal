'use client'

import Bcrumb from '@/components/Bcrumb'
import FooterComponent from '@/components/FooterComponent'
import UserNav from '@/components/UserNav'
import { Datepicker, Label, Radio, TextInput } from 'flowbite-react'
import React from 'react'

const breadCrumbPages: any = [{ page: "Home", link: "/" }];
export default function SugnupPage() {
    return (
        <>
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Sign Up</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Sign Up" />
            </div>
            <h1 className='text-4xl p-8 pb-0 font-extrabold text-center mb-12'>Sign Up Here</h1>
            <div className='border p-10 mx-24 mb-14'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"> Basic Information </h5>
                <div className='flex items-center mb-10'>
                    <button className="theme-btn2 px-10 py-3 mb-2 w-fit text-white flex items-center mr-4" role="button"> Upload Cover Photo </button>
                    <button className="theme-btn2 px-10 py-3 mb-2 w-fit text-white flex items-center" role="button"> Upload Your CV </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <Label htmlFor="signup-name" className='text-gray-400 text-base' value="Your Name" />
                        <TextInput id="signup-name" className='mt-2' placeholder="Full Name" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-email" className='text-gray-400 text-base' value="Your email" />
                        <TextInput id="signup-email" className='mt-2' placeholder="name@company.com" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-dob" className='text-gray-400 text-base' value="Date Of Birth" />
                        <Datepicker id="signup-dob" className='mt-2' style={{ padding: '15px', textAlign: 'right' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-phone" className='text-gray-400 text-base' value="Your Phone" />
                        <TextInput id="signup-phone" className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="job-title" className='text-gray-400 text-base' value="Job Title" />
                        <TextInput id="job-title" className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-address" className='text-gray-400 text-base' value="Address" />
                        <TextInput id="signup-address" className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div className='mt-5'>
                        <Label htmlFor="signup-gender" className='text-gray-400 text-base' value="Gender" />
                        <div className='flex items-center mt-3'>
                            <Radio id="male" name="gender" className='mr-1' value="Male" defaultChecked /> <label htmlFor="male">Male</label>
                            <Radio className='ml-5 mr-1' id="female" name="gender" value="Female" /> <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Label className='text-gray-400 text-base' value="Join as" />
                        <div className='flex items-center mt-3'>
                            <Radio id="candidate" name="usertype" className='mr-1' value="candidate" defaultChecked /> <label htmlFor="candidate">Candidate</label>
                            <Radio className='ml-5 mr-1' id="employer" name="usertype" value="employer" /> <label htmlFor="employer">Employer</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border p-10 mx-24 mb-14'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"> Social Links </h5>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <Label htmlFor="signup-fblink" className='text-gray-400 text-base' value="Facebook" />
                        <TextInput id="signup-fblink" className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-instalink" className='text-gray-400 text-base' value="Instagram" />
                        <TextInput id="signup-instalink" className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-linkedinlink" className='text-gray-400 text-base' value="LinkedIn" />
                        <TextInput id="signup-linkedinlink" className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-dribblelink" className='text-gray-400 text-base' value="Dribble" />
                        <TextInput id="signup-dribblelink" className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                </div>
            </div>
            <div className='flex items-center my-10 mx-24'>
                <button className="theme-btn2 px-10 py-4 mb-2 w-fit text-white font-base flex text-lg items-center" role="button"> Save </button>
            </div>
            <FooterComponent />
        </>
    )
}