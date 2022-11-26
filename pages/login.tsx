import { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from "../components/header";
import Feedback from "../components/feedback";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import signin  from '../utils/userAction';
import Axios from 'axios';


const Login: NextPage = () => {

  var [rollNo,setRollNo]=useState("")
  var [password,setPassword]=useState("")
  const [error, setError] = useState(null);
  const router = useRouter() 

  // const redirect = router.location.search
  //   ? props.location.search.split('=')[1]
  //   : '/home';


 


  useEffect(() => {
    console.log(localStorage.getItem("userInfo"))
    if (localStorage.getItem("userInfo")) {
     
        router.push('/')
    
    }
  

  })
  
 

  const handleSubmit = async (e: any) => {
     e.preventDefault()
    
    try {

      const { data } = await Axios.post('https://facultyportal.herokuapp.com/api/users/signin', { rollNo, password });
      console.log(data)
      localStorage.setItem('userInfo', JSON.stringify(data));
      const userInfo = JSON.stringify(data);
    if(userInfo){
        document.location.href = '/';
    }
      
    } catch (error) {
      setError(error.message)
      console.log(error)
    }
    setError(null)
    };


  return (
 
    <form onSubmit={(e)=>handleSubmit(e)}>
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
<div>
  
<Image className="relative" src="/srecbg.jpg"  layout="fill"/>
<div className="relative flex flex-col items-center justify-center w-screen h-screen gap-2">
{error?( <h1 className="w-[528px] text-[1.4rem] backdrop-blur-sm p-2 mt-5 text-red-600 bg-red-200/[80%] rounded-md shadow-md">{error}</h1>):""}
   <div className="flex flex-col items-center h-3/2 max-h-[636px] max-w-[528px] w-[85vw] p-2 rounded-3xl shadow-2xl bg-white/70 backdrop-blur-sm  flex-justify">
     
     <div className="flex justify-start w-2/3 gap-2 p-2 mt-3">
      
<div className="md:w-[16rem] w-[10rem]">
  
<Image src="/logo.png" height={300}  width={300} layout="responsive"/>
</div>            
           
       
       <div className="flex flex-col justify-center">
           <h1 className="text-[#0496FF] leading-none uppercase font-bold text-[0.65rem] md:text-[0.7rem]">Sri Ramakrishna Engineering College
An AUTONOMOUS Institution</h1>
<p className="leading-none text-black font-light text-[0.7rem] hidden md:block">Reaccredited by NAAC with &apos;A+&apos; Grade,<br></br>
ISO 9001:2015 certified, All eligible programmes Accredited by NBA,
Approved by AICTE, permanently Affiliated to Anna University, Chennai.</p>
       </div>

       </div>
      
      
       <h1 className="font-semibold mt-4 text-[#FF0000]/60 text-[1.4rem]  md:text-[1.7rem] text-shadow-md">Course End Survey Portal</h1>
       <h1 className="font-semibold  text-[#FF0000]/60  md:text-[1.2rem] text-shadow-md">Department of Information Technology</h1>
       <h1 className="font-medium text-[#9C7878] mt-4 md:text-[1.4rem]">Welcome, Sign in to continue</h1>
       <div className="flex flex-col justify-start mt-6 w-[95%] space-y-10 md:w-3/4">
           <div className="relative">
           <input name="rollNo" value={rollNo} onChange={(event)=>{setRollNo(event.target.value)}} className="block h-[3.8rem] text-[1.25rem]  w-full placeholder:text-[D9D9D9] placeholder:text-[1.25rem] p-2 rounded-full shadow-mds focus:outline-none" style={{padding:"20px"}} type="text" placeholder="Roll Number" required/>
           
           </div>
           <input name="password" value={password} onChange={(event)=>{setPassword(event.target.value)}}  className="p-2 h-[3.8rem] text-[1.25rem] placeholder:text-[D9D9D9] placeholder:text-[1.25rem] rounded-full shadow-md  focus:outline-none" style={{padding:"20px"}} type="password" placeholder="Password" required/>
       </div>
       <button type="submit"  className="p-2  w-1/2 rounded-full md:h-[4rem]  m-6 font-bold text-white bg-[#00BDC9] md:text-[1.5rem]">LOGIN</button>
   </div>

</div>


</div>
</form>
  );
};

export default Login;
