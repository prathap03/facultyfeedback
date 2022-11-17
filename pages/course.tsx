import { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from "../components/header";
import Feedback from "../components/feedback";
import Navbar from "../components/navbar";


const course: NextPage = ()=>{
  return (
    <div className="flex flex-col bg-slate-50 ">
    <Header/>
        <div className="  w-[100%] ">
          <div className="flex ">
  
          {/* <div className="w-[20.438rem] ml-2 hidden bg-[#001529]/[89%] mt-5 rounded-tr-2xl shadow-xl rounded-xl rounded-bl-2xl h-[50rem] md:flex">hello</div> */}
          <Navbar/>
          <div className="flex items-center flex-col flex-grow p-[2rem]  ">
            <div className="flex gap-4 w-[100%] p-4  h-max">
              <div className="w-[9.25rem] h-[11.813rem] bg-white rounded-xl
               shadow-md">
              <Image className="rounded-md" src="https://www.srec.ac.in/srec_admin/resource/uploads/src/jFkAIcWX8v02032017012225ganesh.jpg" width={148} height={189} layout='intrinsic'  objectFit="contain"/>
              </div>
              <div className="text-[1.6rem] leading-[2.32rem]">
              <h1>Name: Mr. Y J Ganesh</h1>
              <h1>Course Code: 20MA204</h1>
              <h1>Course Title: Discrete Structures and Combinatorics</h1>
              <h1>Course Department: Mathematics</h1>
              
              <h1>Department: Mathematics</h1>
  
              </div>
              
            </div>
            <h1 className=" text-[2rem]">20MA214 - Discrete Structures and Combinatorics</h1>
          <Feedback/>
          <div className="flex w-[100%] justify-end mt-10">
  
          <button className="p-4 m-2 text-white text-[1.4rem] bg-blue-500 rounded-full">SUBMIT</button>
          </div>
            
        </div>
        
        </div>
        
        </div>
        <div className=" flex relative bottom-0 w-screen  text-white bg-[#001529]/[89%] flex-col items-center justify-center flex-grow p-4">
          <h1>with ❤️ IT</h1>
          <h1>©Copyright 2022</h1>
        </div>
      </div>
  )
}

export default course