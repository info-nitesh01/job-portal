'use client'

import Bcrumb from '@/components/Bcrumb'
import FooterComponent from '@/components/FooterComponent'
import LoginModal from '@/components/LoginModal'
import UserNav from '@/components/UserNav'
import React from 'react'

const breadCrumbPages: any = [{ page: "Home", link: "/" }];
export default function Loginpage() {
    return (
        <>
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Log In</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Login" />
            </div>
            <h1 className='text-4xl p-8 pb-0 font-extrabold text-center mb-5'>Login Your Account</h1>
            <div className='border p-5 lg:p-10 lg:mx-24 lg:flex mb-14'>
                <LoginModal userType="Candidate" />
                <LoginModal userType="Employer" />
            </div>
            <FooterComponent />
        </>
    )
}