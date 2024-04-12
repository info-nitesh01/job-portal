'use client'

import Bcrumb from '@/components/Bcrumb'
import FooterComponent from '@/components/FooterComponent'
import ToastComponent from '@/components/ToastComponent'
import UserNav from '@/components/UserNav'
import { Label, Radio, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { fetchData, postData } from '../store/api/apiSlice'
import { useDispatch, useSelector } from 'react-redux'

const breadCrumbPages: any = [{ page: "Home", link: "/" }];


export default function PrfilePage() {
    const currentUser = JSON.parse(localStorage.getItem('userdata') as string)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [allUsersData, setallUsersData] = useState([])
    const [fullName, setfullName] = useState("");
    const [email, setemail] = useState("");
    const [dob, setdob] = useState("");
    const [phone, setphone] = useState("");
    const [jobTitle, setjobTitle] = useState("");
    const [address, setaddress] = useState("");
    const [gender, setgender] = useState("Male");
    const [userType, setuserType] = useState("candidate");
    const [fbLink, setfbLink] = useState("");
    const [instalink, setinstalink] = useState("");
    const [dribblelink, setdribblelink] = useState("");
    const [ldLink, setldLink] = useState("");
    const [showToast, setshowToast] = useState({ toasttype: "", msg: "" })
    const dispatch = useDispatch<any>();
    const [fileInputName, setfileInputName] = useState("Upload Your CV")
    const state: any = useSelector((state) => state);
    const [file, setfile] = useState()
    const [currentUserindex, setcurrentUserindex] = useState()
    useEffect(() => {
        dispatch(fetchData("/users"));
        console.log(state.apiData.data)
        fetch(apiUrl + '/users')
            .then(response => response.json())
            .then(allUsers => {
                setallUsersData(allUsers);
                let currentUserData = allUsers.filter((item: any) => { return item.id === currentUser.id })
                setcurrentUserindex(allUsers.findIndex((item: any) => item.id === currentUser.id));
                setfileInputName(currentUserData[0].cv);
                setfullName(currentUserData[0].name);
                setphone(currentUserData[0].phone);
                setemail(currentUserData[0].email);
                setdob(currentUserData[0].dateofbirth);
                setaddress(currentUserData[0].address);
                setjobTitle(currentUserData[0].jobtitle);
                setgender(currentUserData[0].gender);
                setfbLink(currentUserData[0].facebookLink);
                setinstalink(currentUserData[0].instaLink);
                setldLink(currentUserData[0].ldLink);
                setdribblelink(currentUserData[0].dribblelink);
            })
    }, [])


    let handlesignup = async () => {
        // const cvData = new FormData();
        // cvData.set('file', file as any)
        // const result = await fetch("api/upload", {
        //     method: "POST",
        //     body: cvData
        // })
        // console.log(await result.json());

        let signupData = {
            "name": fullName,
            "cv": fileInputName,
            "email": email,
            "usertype": userType,
            "dateofbirth": dob,
            "phone": phone,
            "jobtitle": jobTitle,
            "address": address,
            "gender": gender,
            "facebookLink": fbLink,
            "instaLink": instalink,
            "dribblelink": dribblelink,
            "ldLink": ldLink,
        }

        // allUsersData[currentUserindex] = signupData;
        console.log(allUsersData)

        // dispatch(postData({ userdata: signupData, dbName: "/users" }))
        setshowToast({ toasttype: "success", msg: "Signed Up Successfully." })

        setTimeout(() => {
            setshowToast({ toasttype: "", msg: "" });
        }, 3000);
    }

    return (
        <>
            {(showToast.toasttype !== "") ?
                <ToastComponent toastType={showToast.toasttype} msg={showToast.msg} />
                : <></>
            }
            <UserNav />
            <div className="bg-theme-green text-center h-96 flex items-center flex-col justify-center">
                <h1 className='text-4xl font-extrabold text-white mb-6'>Profile</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Profile" />
            </div>
            <div className='border p-10 mx-24 mb-14'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"> Basic Information </h5>
                <div className='flex items-center mb-10'>
                    <input type="file" id='cvUpload' className='hidden' onChange={(e: any) => { setfile(e.target.files?.[0]); setfileInputName(e.target.files?.[0].name) }} />
                    <label htmlFor="cvUpload" className="theme-btn2 px-10 py-3 mb-2 w-fit text-white flex items-center" role="button"> {fileInputName} </label>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <Label htmlFor="signup-name" className='text-gray-400 text-base' value="Your Name" />
                        <TextInput onChange={(e) => setfullName(e.target.value)} id="signup-name" className='mt-2' value={fullName} style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-phone" className='text-gray-400 text-base' value="Your Phone" />
                        <TextInput id="signup-phone" className='mt-2' onChange={(e) => setphone(e.target.value)} value={phone} style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-email" className='text-gray-400 text-base' value="Your email" />
                        <TextInput id="signup-email" onChange={(e) => setemail(e.target.value)} className='mt-2' value={email} style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-dob" className='text-gray-400 text-base' value="Date Of Birth" />
                        <TextInput id="signup-dob" onChange={(e) => setdob(e.target.value)} value={dob} className='mt-2' style={{ padding: '15px' }} />
                    </div>
                    <div className={`${(userType === 'candidate') ? `` : `hidden`}`}>
                        <Label htmlFor="job-title" className='text-gray-400 text-base' value="Job Title" />
                        <TextInput id="job-title" onChange={(e) => setjobTitle(e.target.value)} value={jobTitle} className='mt-2' style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-address" className='text-gray-400 text-base' value="Address" />
                        <TextInput id="signup-address" className='mt-2' onChange={(e) => setaddress(e.target.value)} value={address} style={{ padding: '15px' }} />
                    </div>
                    <div className='mt-5'>
                        <Label htmlFor="signup-gender" className='text-gray-400 text-base' value="Gender" />
                        <div className='flex items-center mt-3'>
                            <Radio id="male" name="gender" className='mr-1' onChange={(e) => setgender(e.target.value)} value="Male" checked={gender === "Male"} /> <label htmlFor="male">Male</label>
                            <Radio className='ml-5 mr-1' onChange={(e) => setgender(e.target.value)} id="female" name="gender" value="Female" checked={gender === "Female"} /> <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border p-10 mx-24 mb-14'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"> Social Links </h5>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <Label htmlFor="signup-fblink" className='text-gray-400 text-base' value="Facebook" />
                        <TextInput id="signup-fblink" onChange={(e) => setfbLink(e.target.value)} value={fbLink} className='mt-2' style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-instalink" className='text-gray-400 text-base' value="Instagram" />
                        <TextInput id="signup-instalink" className='mt-2' onChange={(e) => setinstalink(e.target.value)} value={instalink} style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-linkedinlink" className='text-gray-400 text-base' value="LinkedIn" />
                        <TextInput id="signup-linkedinlink" className='mt-2' onChange={(e) => setldLink(e.target.value)} value={ldLink} style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-dribblelink" className='text-gray-400 text-base' value="Dribble" />
                        <TextInput id="signup-dribblelink" onChange={(e) => setdribblelink(e.target.value)} className='mt-2' value={dribblelink} style={{ padding: '15px' }} />
                    </div>
                </div>
            </div>
            <div className='flex items-center my-10 mx-24'>
                <button onClick={handlesignup} className="theme-btn2 px-10 py-4 mb-2 w-fit text-white font-base flex text-lg items-center" role="button"> Save </button>
            </div>
            <FooterComponent />
        </>
    )
}