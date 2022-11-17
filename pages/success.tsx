import next, { NextPage } from "next";
import Link from "next/link";
import Header from "../components/header";
import Image from "next/legacy/image";
import Navbar from "../components/navbar";

const success: NextPage = ()=>{
    return(
        
        <div className="flex flex-col w-[100%] h-screen   bg-slate-200">
    <Header/>
        <div className="flex flex-col flex-grow">
          <div className="flex h-[95%]">
  
          {/* <div className="w-[20.438rem]  hidden bg-[#001529]/[89%]  rounded-tr-2xl shadow-xl  rounded-br-2xl h-[50rem] md:flex">hello</div> */}
          <Navbar/>
         
            
       
          <div className=" flex items-center justify-center flex-col flex-grow p-[2rem]   ">
          <Image src="/tick.png" height={400} width={400} layout="intrinsic"/>
          <h1 className="text-[1.8rem]">Feedback Submited Successfully</h1>
          <Link href='/' className="p-2 mt-2 w-[10%] text-white text-[1.5rem] justify-center flex bg-blue-500 rounded-full">Go Home</Link>
         </div>
        
        </div>
        <div className=" flex relative  bottom-0 w-screen sticky-bottom-0 text-white bg-[#001529]/[89%] flex-col items-center justify-center flex-grow p-4">
          <h1>with ❤️ IT</h1>
          <h1>©Copyright 2022</h1>
        </div>
      </div>
      </div>
    )
}

export default success;