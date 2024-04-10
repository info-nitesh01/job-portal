'use client'

import React from 'react'
import { Breadcrumb } from "flowbite-react";
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

export default function Bcrumb(props: any) {
    return (
        <div>
            <div className='flex items-center text-white'>
                {props.prevpages.map((item: any, i: number) => { return <div key={i} className='flex items-center'><Link href={item.link}>{item.page}</Link><ChevronRightIcon className='h-5 mx-1' /></div> })}
                <label className='text-gray-300'>{props.lastPage}</label>
            </div>
        </div>
    )
}