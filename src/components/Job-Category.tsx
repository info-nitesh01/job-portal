'use client'

import { BanknotesIcon, CubeIcon } from '@heroicons/react/16/solid'
import { ComputerDesktopIcon, FireIcon, RectangleGroupIcon, SunIcon, TruckIcon } from '@heroicons/react/24/outline'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import { Cog8ToothIcon, HomeIcon } from '@heroicons/react/24/outline'
import React from 'react'

const jobCategory = [
    {
        categoryname: 'Technical Support',
        type: 'techsupport',
        icon: <><Cog8ToothIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#f5e0d6', color: '#c63' }} /></>
    },
    {
        categoryname: 'Business Development',
        type: 'bde',
        icon: <><CubeIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#dad7f2', color: '#7264e5' }} /></>
    },
    {
        categoryname: 'Real Estate Business',
        type: 'reb',
        icon: <><HomeIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#dbf5de', color: '#50cc59' }} /></>
    },
    {
        categoryname: 'Share Maeket Analysis',
        type: 'sma',
        icon: <><ChartBarIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#ece5d1', color: '#daa91f' }} /></>
    },
    {
        categoryname: 'Weather & Environment',
        type: 'weather',
        icon: <><SunIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#ccceff', color: '#1e27f9' }} /></>
    },
    {
        categoryname: 'Finance & Banking Service',
        type: 'finance',
        icon: <><BanknotesIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#ccc', color: '#726f6f' }} /></>
    },
    {
        categoryname: 'IT & Networing Sevices',
        type: 'it',
        icon: <><ComputerDesktopIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#ccf1ff', color: '#1783b6' }} /></>
    },
    {
        categoryname: 'Restaurant Services',
        type: 'restaurant',
        icon: <><RectangleGroupIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#fccffa', color: '#c455bf' }} /></>
    },
    {
        categoryname: 'Defence & Fire Service',
        type: 'defence',
        icon: <><FireIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#f5cccc', color: '#c66' }} /></>
    },
    {
        categoryname: 'Home Delivery Services',
        type: 'homedelivery',
        icon: <><TruckIcon className='h-12 p-3 m-auto rounded-lg mb-5' style={{ backgroundColor: '#d0e6d2', color: '#116e18' }} /></>
    },



]

export default function JobCategory() {
    return (
        <div className='p-12 px-28'>
            <h1 className='text-4xl font-bold text-center mb-10'>Choose Your Desire Category</h1>
            <div className='grid grid-cols-5'>
                {jobCategory.map((item, i) => {
                    return <div key={i} className='border p-8 text-center hover:shadow-lg'>
                        {item.icon}
                        <h5 className="tracking-tight font-semibold text-gray-900 w-2/3 m-auto "> {item.categoryname} </h5>
                    </div>
                })}
            </div>
        </div >
    )
}