'use client'

import Bcrumb from '@/components/Bcrumb'
import FooterComponent from '@/components/FooterComponent'
import ToastComponent from '@/components/ToastComponent'
import UserNav from '@/components/UserNav'
import { Label, Radio, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { postData } from '../store/api/apiSlice'
import { useDispatch, useSelector } from 'react-redux'

const breadCrumbPages: any = [{ page: "Home", link: "/" }];
export default function SugnupPage() {
    const [fullName, setfullName] = useState("");
    const [email, setemail] = useState("");
    const [dob, setdob] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("")
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
    const state = useSelector((state) => state);

    let handlesignup = () => {
        let signupData = {
            "name": fullName,
            "email": email,
            "usertype": userType,
            "password": password,
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


        fetch('http://localhost:4000/users')
            .then(response => response.json())
            .then(users => {
                let filteredApiData = users.filter((item: any) => { return item.email === email })
                if (filteredApiData.length > 0) {
                    setshowToast({ toasttype: "warning", msg: "User already exists!" })
                } else {
                    if ((fullName && email && userType && password && phone && gender) !== "") {
                        setshowToast({ toasttype: "success", msg: "Signed Up Successfully." })
                        dispatch(postData({ userdata: signupData, dbName: "/users" }))

                        // fetch('http://localhost:4000/users', {
                        //     method: 'POST',
                        //     headers: {
                        //         'Content-Type': 'application/json',
                        //     },
                        //     body: JSON.stringify(signupData),
                        // })
                        //     .then(response => response.json())
                        //     .then(user => console.log(user));

                        { setfullName(""); setemail(""); setuserType(""); setpassword(""); setphone(""); setgender("male"); setuserType("candidate"); }
                    } else {
                        setshowToast({ toasttype: "warning", msg: "Please fill all the mandatory details!" })
                    }
                }
            })


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
                <h1 className='text-4xl font-extrabold text-white mb-6'>Sign Up</h1>
                <Bcrumb prevpages={breadCrumbPages} lastPage="Sign Up" />
            </div>
            <h1 className='text-4xl p-8 pb-0 font-extrabold text-center mb-12'>Sign Up Here</h1>
            <div className='border p-10 mx-24 mb-14'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"> Basic Information </h5>
                <div className='flex items-center mb-10'>
                    <button className="theme-btn2 px-10 py-3 mb-2 w-fit text-white flex items-center" role="button"> Upload Your CV </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <Label htmlFor="signup-name" className='text-gray-400 text-base required' value="Your Name" />
                        <TextInput onChange={(e) => setfullName(e.target.value)} id="signup-name" className='mt-2' value={fullName} placeholder="Full Name" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-phone" className='text-gray-400 text-base required' value="Your Phone" />
                        <TextInput id="signup-phone" className='mt-2' onChange={(e) => setphone(e.target.value)} value={phone} required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-email" className='text-gray-400 text-base required' value="Your email" />
                        <TextInput id="signup-email" onChange={(e) => setemail(e.target.value)} className='mt-2' value={email} placeholder="name@company.com" required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="password" className='text-gray-400 text-base required' value="Password" />
                        <TextInput id="password" onChange={(e) => setpassword(e.target.value)} type='password' value={password} className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-dob" className='text-gray-400 text-base' value="Date Of Birth" />
                        <TextInput id="signup-dob" onChange={(e) => setdob(e.target.value)} type='date' value={dob} className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-address" className='text-gray-400 text-base' value="Address" />
                        <TextInput id="signup-address" className='mt-2' onChange={(e) => setaddress(e.target.value)} value={address} required style={{ padding: '15px' }} />
                    </div>
                    <div className='mt-5'>
                        <Label className='text-gray-400 text-base required' value="Join as" />
                        <div className='flex items-center mt-3'>
                            <Radio id="candidate" name="usertype" onChange={(e) => setuserType(e.target.value)} className='mr-1' value="candidate" defaultChecked /> <label htmlFor="candidate">Candidate</label>
                            <Radio className='ml-5 mr-1' id="employer" onChange={(e) => setuserType(e.target.value)} name="usertype" value="employer" /> <label htmlFor="employer">Employer</label>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <Label htmlFor="signup-gender" className='text-gray-400 text-base required' value="Gender" />
                        <div className='flex items-center mt-3'>
                            <Radio id="male" name="gender" className='mr-1' onChange={(e) => setgender(e.target.value)} value="Male" defaultChecked /> <label htmlFor="male">Male</label>
                            <Radio className='ml-5 mr-1' onChange={(e) => setgender(e.target.value)} id="female" name="gender" value="Female" /> <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className={`${(userType === 'candidate') ? `` : `hidden`}`}>
                        <Label htmlFor="job-title" className='text-gray-400 text-base' value="Job Title" />
                        <TextInput id="job-title" onChange={(e) => setjobTitle(e.target.value)} value={jobTitle} className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                </div>
            </div>
            <div className='border p-10 mx-24 mb-14'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-10"> Social Links </h5>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <Label htmlFor="signup-fblink" className='text-gray-400 text-base' value="Facebook" />
                        <TextInput id="signup-fblink" onChange={(e) => setfbLink(e.target.value)} value={fbLink} className='mt-2' required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-instalink" className='text-gray-400 text-base' value="Instagram" />
                        <TextInput id="signup-instalink" className='mt-2' onChange={(e) => setinstalink(e.target.value)} value={instalink} required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-linkedinlink" className='text-gray-400 text-base' value="LinkedIn" />
                        <TextInput id="signup-linkedinlink" className='mt-2' onChange={(e) => setldLink(e.target.value)} value={ldLink} required style={{ padding: '15px' }} />
                    </div>
                    <div>
                        <Label htmlFor="signup-dribblelink" className='text-gray-400 text-base' value="Dribble" />
                        <TextInput id="signup-dribblelink" onChange={(e) => setdribblelink(e.target.value)} className='mt-2' value={dribblelink} required style={{ padding: '15px' }} />
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