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
import { ClipLoader } from 'react-spinners';
import confetti from 'canvas-confetti';

export default function Home() {
  const router = useRouter() 


  var [courses,setCourses]=useState([])
  const [loading,setLoading] = useState(true);
  const [logLoading,setLogLoading] = useState(true);
  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
];
var easterEgg = [];
if(typeof Audio !="undefined"){

  var audio = new Audio('https://previews.customer.envatousercontent.com/files/376286923/preview.mp3');
  var msg = new Audio('/narration.mp3');
  msg.volume=1
}

function arrayEquals(a, b) {
  return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

 


  useEffect(() => {
    setLogLoading(true)
    if (!(localStorage.getItem("userInfo"))) {
     
        router.push('/login')
        
    
    }else{
      setLogLoading(false);
    }
   
  

    document.body.addEventListener('keydown',(event)=>{
      event.stopImmediatePropagation()
      if(easterEgg.length==10){
        easterEgg=[]
       }else{

       


        easterEgg.push(event.key)
      console.log("KONI=> ",easterEgg)
      console.log(konamiCode==easterEgg)
      if(arrayEquals(konamiCode,easterEgg)){
        var duration = 2 * 1000;
var end = Date.now() + duration;

(function frame() {
  // launch a few confetti from the left edge
  confetti({
    particleCount: 3,
    angle: 60,
    spread: 55,
    origin: { x: 0 }
  });
  // and launch a few from the right edge
  confetti({
    particleCount: 3,
    angle: 120,
    spread: 55,
    origin: { x: 1 }
  });

  // keep going until we are out of time
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
        audio.play();
        setTimeout(()=>{msg.play();},3000)
        

        
       
       
        easterEgg=[]
       console.log("k")
       }
       }
      
       
      
    
    })

    const fetchCourses = async () => {
      setLoading(true);
      const { data } = await Axios.get('https://private-autumn-pullover.glitch.me/api/users/course/get');
      setCourses(data);
      setLoading(false);
    }
    fetchCourses()
    console.log(courses)
    


  },[])
  return (
   
    <div id='body' className="flex flex-col min-h-screen h-max md:w-screen bg-slate-100">
     <Head>
     <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
      </Head>
   
        {logLoading?(<div className='flex h-[100%]   m-4 justify-center items-center flex-grow'>
            <ClipLoader size={60}   color="#3693d6"/>
          </div>):(
        <>
         <Header/>
        <div className="flex flex-grow">
          <div className="flex flex-grow ">
  
          
         <div className='hidden md:flex'>
         <Navbar/>
         </div>
         
          <div className="flex items-center flex-col flex-grow p-[2rem]  ">
         <div className='flex justify-start md:text-[1.6rem] mb-2 w-[100%]  md:w-[80%]'>
         <h1 className='text-[0.97rem] md:text-[1rem]'>Courses Enrolled: IT - 2nd Year - Sem 3 2022-23</h1>
         </div>
          {!loading?(
             <div className='flex flex-col gap-4 w-[100%] md:w-[80%]'>
             {courses.map((course)=>{
              if(course.active){
                return (
                  <Link href={`courses/${course._id}`} className='flex items-center gap-2 p-4 h-[100%] w-[100%] bg-white shadow-xl rounded-md text-[0.8rem] justify-center md:text-[1.7rem] '>
            
                  <h1>{course.courseId} - {course.courseTitle}
                  
                  </h1>
                  {/* <svg
                                   viewBox="0 0 30 30"
                                   aria-label="Verified account"
                                   role="img"
                                   className="r-1cvl2hr r-4qtqp9 r-yyyyoo r-1xvli5t r-f9ja8p r-og9te1 r-bnwqim r-1plcrui r-lrvibr"
                                   data-testid="icon-verified"
                                   width={'1.5rem'}
                                   height={'1.5rem'}
                                 
                                 >
                                   <g>
                                     <path
                                       fill="#7CFC00"
                                       d="M27.814 15c0 -1.788 -1.101 -3.339 -2.736 -4.176 0.576 -1.736 0.249 -3.624 -1.014 -4.886s-3.15 -1.585 -4.886 -1.014c-0.825 -1.639 -2.389 -2.736 -4.176 -2.736s-3.339 1.101 -4.164 2.736c-1.749 -0.576 -3.639 -0.249 -4.899 1.014s-1.575 3.15 -0.999 4.886c-1.639 0.836 -2.751 2.389 -2.751 4.176s1.113 3.339 2.751 4.176c-0.576 1.736 -0.261 3.624 0.999 4.886s3.15 1.575 4.886 1.014c0.836 1.639 2.389 2.736 4.176 2.736s3.351 -1.101 4.176 -2.736c1.736 0.564 3.624 0.249 4.886 -1.014s1.585 -3.15 1.014 -4.886c1.639 -0.836 2.736 -2.389 2.736 -4.176zm-14.637 5.25L8.499 15.576l1.764 -1.776 2.826 2.826 6 -6.536 1.839 1.701 -7.749 8.464z"
                                     />
                                   </g>
                                 </svg> */}
                  
                 </Link>
                )
              }else{
                return (
                  <div  className='flex p-4 h-[100%] w-[100%] bg-red-200 shadow-xl rounded-md text-[0.8rem] justify-center md:text-[1.7rem] '>
            
                  <h1>{course.courseId} - {course.courseTitle}</h1>
     
                  
                 </div>
                )
              }
           
             })}
            
           
           
   
   
            </div>
          ):(<div className='flex  m-4 justify-center items-center w-[100%] flex-grow'>
            <ClipLoader size={60}   color="#3693d6"/>
          </div>)}
      
         
        
         
        
          
            
        </div>
        
        </div>
        
        </div>
        <div className=" flex sm:relative absolute bottom-0 w-screen text-[0.5rem] md:text-[1rem] sticky-bottom-0 text-white bg-[#001529]/[89%] flex-col items-center justify-center  p-4">
          <h1>with ❤️ IT</h1>
          <h1>©Copyright 2022</h1>
        </div>
        </>)}
      </div>
  );
}
