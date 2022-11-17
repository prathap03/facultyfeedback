import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import getCourses  from '../utils/courseAction';
import styles from '../styles/Home.module.css'
import Axios from 'axios';

export default function Home() {
  const router = useRouter() 


  var [courses,setCourses]=useState([])

  useEffect(() => {
    if (!(localStorage.getItem("userInfo"))) {
     
        router.push('/login')
        
    
    }

    const fetchCourses = async () => {
      const { data } = await Axios.get('http://localhost:5000/api/users/course/get');
      setCourses(data);
    }
    fetchCourses()
    console.log(courses)
    


  },[])
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-100 ">
    <Header/>
        <div className="  w-[100%] h-screen  ">
          <div className="flex flex-grow h-[100%]">
  
          {/* <div className="w-[20.438rem]  hidden bg-[#001529]/[89%]  rounded-tr-2xl shadow-xl  rounded-br-2xl h-[50rem] md:flex">hello</div> */}
         <div className='h-[91.2%] flex '>
         <Navbar/>
         </div>
         
          <div className="flex items-center flex-col flex-grow p-[2rem]  ">
         <div className='flex justify-start text-[1.6rem] mb-2  w-[80%]'>
         <h1>Courses Enrolled: IT - 2nd Year - Sem 3 2022-23</h1>
         </div>
         <div className='flex flex-col gap-4 w-[80%]'>
          {courses.map((course)=>{
            return (
              <Link href={`courses/${course._id}`} className='flex p-4 h-[100%] w-[100%] bg-white shadow-xl rounded-md justify-center text-[1.7rem] '>
        
              <h1>{course.courseId} - {course.courseTitle}</h1>
              
             </Link>
            )
          })}
         
        
        


         </div>
      
         
        
         
        
          
            
        </div>
        
        </div>
        
        </div>
        <div className=" flex absolute bottom-0 w-screen  sticky-bottom-0 text-white bg-[#001529]/[100%] flex-col items-center justify-center flex-grow p-4">
          <h1>with ❤️ IT</h1>
          <h1>©Copyright 2022</h1>
        </div>
      </div>
  );
}
