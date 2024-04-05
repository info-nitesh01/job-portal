'use client'

import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/16/solid'
import { Card, Tabs } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

export default function JobArea() {
    return (
        <div className='p-12 px-28'>
            <h1 className='text-4xl font-bold text-center'>Recent Jobs</h1>
            <Tabs aria-label="Pills" style="pills">
                <Tabs.Item active title="All">
                    <div className='grid grid-cols-2'>
                        <Card className="rounded-none border-gray-300 p-3 m-auto" horizontal>
                            <div className='grid grid-cols-5'>
                                <img className='w-fit my-auto' src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/jobs/1.png" alt="" />
                                <div className='col-span-3 leading-10'>
                                    <Link href="/job-details" className="text-xl font-bold tracking-tight text-gray-900"> UI/UX Designer </Link>
                                    <p className='text-theme-green font-medium'>winbrans.com</p>
                                    <p className='text-gray-500 text-sm font-medium flex items-center'><CurrencyDollarIcon className='mr-2 h-4 text-theme-green' />$20k - $25k</p>
                                    <p className='text-gray-500 text-sm font-medium flex items-start'><MapPinIcon className='mr-2 h-5 text-theme-green' />Location 210-27 Quadra, Market Street, Victoria Canada
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <button className="common-btn px-5 py-2 mb-2" role="button"><span>Apply</span></button>
                                    <p className="theme-btn2 px-4 py-2 text-white" role="button">Full Time</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="rounded-none border-gray-300 p-3 m-auto" horizontal>
                            <div className='grid grid-cols-5'>
                                <img className='w-fit my-auto' src="https://templates.hibootstrap.com/gable/default/assets/img/home-1/jobs/1.png" alt="" />
                                <div className='col-span-3 leading-10'>
                                    <Link href="/job-details" className="text-xl font-bold tracking-tight text-gray-900"> UI/UX Designer </Link>
                                    <p className='text-theme-green font-medium'>winbrans.com</p>
                                    <p className='text-gray-500 text-sm font-medium flex items-center'><CurrencyDollarIcon className='mr-2 h-4 text-theme-green' />$20k - $25k</p>
                                    <p className='text-gray-500 text-sm font-medium flex items-start'><MapPinIcon className='mr-2 h-5 text-theme-green' />Location 210-27 Quadra, Market Street, Victoria Canada
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <button className="common-btn px-5 py-2 mb-2" role="button"><span>Apply</span></button>
                                    <p className="theme-btn2 px-4 py-2 text-white" role="button">Full Time</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="New">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
                </Tabs.Item>
                <Tabs.Item title="Featured">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
                </Tabs.Item>
                <Tabs.Item title="Recent">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
                </Tabs.Item>
            </Tabs>
        </div>
    )
}