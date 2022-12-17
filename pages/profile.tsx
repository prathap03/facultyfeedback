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
                 
                <h1>{studentDetails ? (
                  <span className='flex  items-center gap-1'>
                     <h1>

                     Name: 
                     </h1>
                    {studentDetails.name}
                    {studentDetails.creator ? (
                                   <svg
                                   viewBox="0 0 30 30"
                                   aria-label="Verified account"
                                   role="img"
                                   className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"
                                   data-testid="icon-verified"
                                   width={16}
                                   height={16}
                                 
                                 >
                                   <g>
                                     <path
                                       fill="#FFAF40"
                                       d="M27.814 15c0 -1.788 -1.101 -3.339 -2.736 -4.176 0.576 -1.736 0.249 -3.624 -1.014 -4.886s-3.15 -1.585 -4.886 -1.014c-0.825 -1.639 -2.389 -2.736 -4.176 -2.736s-3.339 1.101 -4.164 2.736c-1.749 -0.576 -3.639 -0.249 -4.899 1.014s-1.575 3.15 -0.999 4.886c-1.639 0.836 -2.751 2.389 -2.751 4.176s1.113 3.339 2.751 4.176c-0.576 1.736 -0.261 3.624 0.999 4.886s3.15 1.575 4.886 1.014c0.836 1.639 2.389 2.736 4.176 2.736s3.351 -1.101 4.176 -2.736c1.736 0.564 3.624 0.249 4.886 -1.014s1.585 -3.15 1.014 -4.886c1.639 -0.836 2.736 -2.389 2.736 -4.176zm-14.637 5.25L8.499 15.576l1.764 -1.776 2.826 2.826 6 -6.536 1.839 1.701 -7.749 8.464z"
                                     />
                                   </g>
                                 </svg>
                    ):''}
                  </span>
                  ) : <span className='animate-pulse'>loading..</span>}</h1>
                
                 <h1>Dept & Year : {studentDetails ? studentDetails.department+" - " + studentDetails.year+"nd Year" : <span className='animate-pulse'>loading..</span>} </h1>
                 <h1>Roll No: {studentDetails? studentDetails.rollNo :<span className='animate-pulse'>loading..</span>}</h1>
                 <h1>Section: {userDetails ? userDetails.class : <span className='animate-pulse'>loading..</span>}</h1>
                 <h1>Batch: {studentDetails ? studentDetails.batch : <span className='animate-pulse'>loading..</span>}</h1>
                 <h1>email: {studentDetails ? studentDetails.email : <span className='animate-pulse'>loading..</span>}</h1>
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
