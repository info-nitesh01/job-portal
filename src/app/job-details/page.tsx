"use client";

import { Breadcrumb } from "flowbite-react";

export default function JobDetails() {
    return (
        <>
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Job Details</h1>
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="#">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
                    <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="grid grid-cols-5 m-24">
                <div className="col-span-3">
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5"> UI/UX Designer </h5>
                        <p className='text-gray-500 leading-7 flex items-center mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                        <p className='text-gray-500 leading-7 flex items-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam sapiente dolor quos expedita quis, ad perspiciatis hic nihil laboriosam at eius.</p>
                    </div>
                    <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-5"> Required Knowledge, Skills, and Abilities </h5>
                    </div>
                </div>
                <div className="col-span-2"></div>
            </div>
        </>
    )
}