"use client";

import Bcrumb from "@/components/Bcrumb";
import UserNav from "@/components/UserNav";
import { AcademicCapIcon, ChevronRightIcon, InboxArrowDownIcon, MapPinIcon, PhoneIcon, StarIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

const breadCrumbPages: any = [{ page: "Home", link: "/" }];

export default function JobDetails() {
    return (
        <>
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Job Details</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Job Details" />
            </div>
            <div className="grid lg:grid-cols-5 m-8 lg:m-24">
                <div className="col-span-3">
                    <div>
                        <div className="pb-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5"> UI/UX Designer </h5>
                            <p className='text-gray-500 leading-7 flex items-center mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                            <p className='text-gray-500 leading-7 flex items-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magnam sapiente dolor quos expedita quis, ad perspiciatis hic nihil laboriosam at eius.</p>
                        </div>
                        <div className="pb-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5"> Required Knowledge, Skills, and Abilities </h5>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Hand On experience with Wordpress</p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Better knowledge of front-end technologies, including HTML5, CSS3, JavaScript, jQuery </p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Belief – believing in yourself and those around you</p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Experience designing and developing responsive design websites</p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Ability to convert comprehensive layout and wireframes into working HTML pages</p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Strong understanding of PHP back-end development</p>
                        </div>
                        <div className="pb-5">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5"> Education Qualification </h5>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Any Graduattion Degree(13th Pass) (Preferred)</p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Advanced degree or equivalent experience in graphic and web design </p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />2 or more years of professional design experience</p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Direct response email experience</p>
                            <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5'><ChevronRightIcon className="h-5 text-theme-green" />Ecommerce website design experience</p>
                        </div>
                        <button className="common-btn-2 px-7 py-4 w-full" role="button"><span className="text flex items-center justify-center">Apply Now</span></button>
                    </div>
                </div>
                <div className="col-span-3 lg:col-span-2">
                    <div className="border my-5 lg:mt-0 lg:mx-10 p-8">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 border-b border-theme-green mb-5 pb-4"><span className="border-b-4 pb-4 border-theme-green"> Overview </span></h5>
                        <div className="flex items-center mb-5">
                            <CurrencyDollarIcon className="h-8 text-theme-green" />
                            <div className="ml-5">
                                <p className="font-medium">Offered Salary</p>
                                <p className='text-gray-500 text-sm leading-7'>$10k-$150k</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-5">
                            <UserGroupIcon className="h-8 text-theme-green" />
                            <div className="ml-5">
                                <p className="font-medium">Gender</p>
                                <p className='text-gray-500 text-sm leading-7'>Male</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-5">
                            <StarIcon className="h-8 text-theme-green" />
                            <div className="ml-5">
                                <p className="font-medium">Experince</p>
                                <p className='text-gray-500 text-sm leading-7'>2 Years</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-5">
                            <AcademicCapIcon className="h-8 text-theme-green" />
                            <div className="ml-5">
                                <p className="font-medium">Qualification</p>
                                <p className='text-gray-500 text-sm leading-7'>Master Degree</p>
                            </div>
                        </div>
                    </div>
                    <div className="border lg:mt-0 lg:mx-10 p-8">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 border-b border-theme-green mb-5 pb-4"><span className="border-b-4 pb-4 border-theme-green"> Company Address </span></h5>
                        <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5 text-sm'><MapPinIcon className="h-5 text-theme-green me-3" />4th Floor, 408 No Chamber</p>
                        <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5 text-sm'><PhoneIcon className="h-5 text-theme-green me-3" />Call : +07 554 332 322</p>
                        <p className='text-gray-500 leading-7 flex items-center mb-2 ms-5 text-sm'><InboxArrowDownIcon className="h-5 text-theme-green me-3" />hello@gable.com</p>
                    </div>
                </div>

            </div>
        </>
    )
}