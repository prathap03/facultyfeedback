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
  const [loading,setLoading] = useState(false);
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
    setLoading(true)
    if (!(localStorage.getItem("userInfo"))) {
     
        router.push('/login')
        
    
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
      const { data } = await Axios.get('https://facultyportal.herokuapp.com/api/users/course/get');
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
    <Header/>
        {loading?(<div className='flex h-[100%]   m-4 justify-center items-center flex-grow'>
            <ClipLoader size={60}   color="#3693d6"/>
          </div>):(
        <>
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
                  <Link href={`courses/${course._id}`} className='flex p-4 h-[100%] w-[100%] bg-white shadow-xl rounded-md text-[0.8rem] justify-center md:text-[1.7rem] '>
            
                  <h1>{course.courseId} - {course.courseTitle}</h1>
                  
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
