import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React from 'react'

export default function HomeBanner() {
    return (
        <>
            <div className='find-job-banner'>
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <h1 className='text-5xl font-extrabold text-white '>Find Your <span className='text-theme-green'>Desired</span> Job</h1>
                    <h1 className='my-5 text-white'>Jobs, Employment & Future Career Opportunities</h1>
                    <div className='relative flex items-center w-1/2'>
                        <input type="text" className="text-theme-green font-medium w-100 border-none p-5 w-full rounded-full" placeholder="Job Title" />
                        <button><MagnifyingGlassIcon className='h-8 absolute top-4 right-4 text-theme-green' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}