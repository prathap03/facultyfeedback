import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Navbar from '../components/navbar'

import Head from '../node_modules/next/head'



export default function Profile() {
    const userDetails = {profileUrl:'/profile.jpeg',name:'Joe Prathap P J',department:'B.Tech IT',class:'A',batch:'2025',tutour:'Mr Prabhu T N',year:'2',rollNo:'71812105043'}
    const [studentDetails,setStudentDetails] = useState(null);

    useEffect(() => {
     if(typeof window!=='undefined' && localStorage.getItem("userInfo")){
      setStudentDetails(JSON.parse(localStorage.getItem("userInfo")).userDetails);
      
     }
    }, [])

    console.log(studentDetails)

    
    return (
        <div>
               <Head>
      
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    
            <title>
              Students Portal
            </title>
          </Head>
            <Header/>
            {userDetails?(
                 <div className='flex gap-2 h-[calc(100vh_-_81px)]'>
                <div className='hidden md:flex '>
                <Navbar/>
                </div>
                 <div className='flex md:gap-8 gap-4 h-max w-[100%] md:p-4 p-2 md:m-8 m-4 rounded-lg bg-[#F8F5F5] shadow-md shadow-black/20'>
                 {userDetails?(
                     <>
                    
                     {userDetails ? (
                          <img src={userDetails.profileUrl} className='md:w-[10rem] w-[6rem] h-[8.7rem] md:h-[12rem] object-cover rounded-lg' alt="profile"/>
                     ):<h1>Loading...</h1>}
                
                 <div className='flex text-[0.6rem] md:text-[1rem] flex-col gap-2'>
                 <h1>Name: {studentDetails ? studentDetails.name : "loading.."}</h1>
                 <h1>Dept & Year : {studentDetails ? studentDetails.department+" - " + studentDetails.year+"nd Year" : "loading.."} </h1>
                 <h1>Roll No: {studentDetails? studentDetails.rollNo : "loading.."}</h1>
                 <h1>Section: {userDetails ? userDetails.class : "loading.."}</h1>
                 <h1>Batch: {studentDetails ? studentDetails.batch : "loading.."}</h1>
                 <h1>email: {studentDetails ? studentDetails.email : "loading.."}</h1>
                 </div>
                
                 </>
                 ):(<div className='flex items-center justify-center w-[100%] '>Loading</div>)}
                  </div>
                 </div>
            ):(<div className='flex items-center justify-center h-screen'>Loading</div>)}
            <div className=" flex absolute bottom-0 w-screen text-[0.5rem] md:text-[1rem] sticky-bottom-0 text-white bg-[#001529]/[100%] flex-col items-center justify-center md:flex-grow p-4">
          <h1>with ❤️ IT</h1>
          <h1>©Copyright 2022</h1>
        </div>
        </div>

    )
}
