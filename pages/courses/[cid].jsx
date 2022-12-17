import {useRouter} from 'next/router'
import { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import Header from "../../components/header";

import Navbar from "../../components/navbar";
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { ClipLoader } from 'react-spinners';



const Course = () => {
    const router = useRouter()
    const {cid} = router.query
    const [courseDetails,setCourseDetails] = useState({})
    const [facultyDetails,setFacultyDetails] = useState({})
    const [punctuality,setPunctuality] = useState(null)
    const [regularity,setRegularity] = useState(null)
    const [personality,setPersonality]=useState(null)
    const [clarity,setClarity]=useState(null)
    const [pace,setPace]=useState(null);
    const [raiseDoubts,setRaiseDoubts]=useState(null)
    const [discipline,seDiscipline]=useState(null)
    const [feedback,setFeedback] =useState(null)
    const [attention,setAttention] = useState(null)
    const [examples,setExamples] = useState(null)
    const [exists,setExists]=useState(false)
    const [materials,setMaterials]=useState(null);
    const [loading,setLoading] = useState(true); 
 
    const criterions = [
       {name:"1. Punctuality",set:setPunctuality},
       {name:"2. Regularity",set:setRegularity},
       {name:"3. Personality",set:setPersonality},
       {name:"4. Pace of covering Syllabus",set:setPace},
       {name:"5. Clarity in Expressions",set:setClarity},
       {name:"6. Encourage to raise doubts and ability to clarify",set:setRaiseDoubts},
       {name:"7. Ability to maintain discipline",set:seDiscipline},
       {name:"8. Provision of feedback on learning deficiency",set:setFeedback},
       {name:"9. Ability to sustain students attention and interest",set:setAttention},
       {name:"10. Provision of sufficient Course materials",set:setMaterials},
       {name:"11. Citations, Examples and Illustrations",set:setExamples}
    ]

    const handleSubmit = async ()=>{
      if(punctuality && regularity && personality && clarity && pace && raiseDoubts && discipline && feedback && attention && examples){
        const details = {
          punctuality:parseInt(punctuality),
          regularity:parseInt(regularity),
          personality:parseInt(personality),
          clarity:parseInt(clarity),
          pace:parseInt(pace),
          raiseDoubts:parseInt(raiseDoubts),
          discipline:parseInt(discipline),
          feedback:parseInt(feedback),
          attention:parseInt(attention),
          materials:parseInt(materials),
          examples:parseInt(examples)
        }

        const rollNo = JSON.parse(localStorage.getItem("userInfo")).rollNo
        const courseId = courseDetails._id;
        const courseCode = courseDetails.courseId;
        const facultyName = facultyDetails.name
        const courseTitle = courseDetails.courseTitle;
        const fid = facultyDetails._id;

        const data = {rollNo:rollNo,data:{courseId:courseId,courseCode:courseCode,courseTitle:courseTitle,facultyId:fid,facultyName:facultyName,feedback:details}}

        const result = await Axios.post("https://private-autumn-pullover.glitch.me/api/feedback/insert",data).then((result)=>{
          router.push("/success")
        })

      }
    }

    useEffect(() => {
      setLoading(true)
      const checkExists = async(id)=>{
        try{
          const post = {cid:id,rollNo:JSON.parse(localStorage.getItem("userInfo")).rollNo}
        const data = await Axios.post("https://private-autumn-pullover.glitch.me/api/feedback/check",post)
        
        if(data){
          setExists(data.data);
          setLoading(false)
        }
        }catch(error){
          console.log(error)
         
        }
      }

     


      if (!(localStorage.getItem("userInfo"))) {
     
        router.push('/login')
        
    
    }
    
     try{
        const fetchFaculty = async (fid)=>{
            const {data} = await Axios.get(`https://private-autumn-pullover.glitch.me/api/users/course/faculty/${fid}`)
            setFacultyDetails(data);
            console.log(data);
           
         }   

        const fetchCourse = async (cid)=>{
            if(cid){
               
                const {data} = await Axios.get(`https://private-autumn-pullover.glitch.me/api/users/course/student/${cid}`)
                setCourseDetails(data);
                console.log(courseDetails)
                let fid;
                try{
                  checkExists(cid);
                data.courseFaculties.forEach(faculty => {
                    if(faculty.enrolledStudents.includes(JSON.parse(localStorage.getItem('userInfo')).rollNo)){
                        console.log(faculty.facultyId)
                        fid=faculty.facultyId
                        fetchFaculty(fid);
                        
                    }
                });
              }catch(error){
                  console.log(error)
              }
              
                return;
            }else{
                 console.log(cid)
            }
         }
         fetchCourse(cid);
     } catch(error){
        console.log(error)
     }
    
        
    
    }, [cid])
    
    return (
      <div className="flex flex-col h-[100%] min-h-screen w-[100vw] md:w-[100%] bg-slate-100 ">
        <Header/>
  
            <div className="  w-[100%] flex flex-grow flex-col " >
            {loading ? (<div className='flex h-[100%]   m-4 justify-center items-center flex-grow'>
            <ClipLoader size={60}   color="#3693d6"/>
          </div>):(
              <div className="flex flex-grow ">
              
              {/* <div className="w-[20.438rem] ml-2 hidden bg-[#001529]/[89%] mt-5 rounded-tr-2xl shadow-xl rounded-xl rounded-bl-2xl h-[50rem] md:flex">hello</div> */}
             <div className='hidden md:flex'>
             <Navbar/>
             </div>
              
              <div className="flex items-center flex-col flex-grow md:p-[2rem] p-[1rem]" >
                <div className="flex gap-4 w-[100%] p-4">
                  <div className="w-[5.25rem] md:h-[11.813rem] md:w-[8.9rem] h-[5rem] bg-white rounded-xl
                   shadow-md">
                  <Image className="rounded-md " src={facultyDetails.profileUrl} width={150} height={200} layout='intrinsic'  />
                  </div>
                  <div className="md:text-[1.6rem] text-[0.7rem] leading-[1.21rem] md:leading-[2.32rem]" >
                  
                  <h1>Name: {facultyDetails?facultyDetails.name:"Loading..."}</h1>
                  <h1>Course Code: {courseDetails?courseDetails.courseId:"Loading..."}</h1>
                  <h1>Course Title: {courseDetails.courseTitle}</h1>
                  <h1>Course Department: {courseDetails.courseDepartment}</h1>
                  <h1>Department: {facultyDetails.department}</h1>
      
                  </div>
                  
                </div>
                <h1 className=" md:text-[2rem] text-[1.3rem]">{courseDetails.courseId} - {courseDetails.courseTitle}</h1>
                {!(exists)?(
                  <div className="w-[100%] md:p-4 p-2 rounded-md bg-slate-200   shadow-md">
                  <div className="flex flex-col gap-8 mt-10 " >
                    {criterions.map((criterion)=>{
                       return(
                          <div className="flex flex-col gap-4 md:p-4 p-2 bg-white/90 w-[100%] rounded-2xl shadow-md">
                          <h1 className="md:text-[1.8rem]  text-[0.8rem]">{criterion.name}</h1>
                            <fieldset name={criterion.name.split(" ")[0]} id={criterion.name.split(" ")[0]} onChange={(e)=>{criterion.set(e.target.value)}} className='flex md:gap-4 gap-[0.4rem] text-[0.7rem] md:text-[1.6rem]'>
                            <input value={1} type="radio"  className="scale-[80%] md:scale-150" name={criterion.name.split(" ")[0]} id={criterion.name.split(" ")[0]} />
                            <label htmlFor="1">Poor</label>
                            <input value={2} type="radio" className="scale-[80%] md:scale-150 " name={criterion.name.split(" ")[0]} id={criterion.name.split(" ")[0]} />
                            <label htmlFor="Moderate">Moderate</label>
                            <input value={3} type="radio" className="scale-[80%] md:scale-150 " name={criterion.name.split(" ")[0]} id={criterion.name.split(" ")[0]} />
                            <label htmlFor="Good">Good</label>
                            <input value={4} type="radio" className="scale-[80%] md:scale-150 " name={criterion.name.split(" ")[0]} id={criterion.name.split(" ")[0]} />
                            <label htmlFor="Moderate">Very Good</label>
                            <input value={5} type="radio" className="scale-[80%] md:scale-150 " name={criterion.name.split(" ")[0]} id={criterion.name.split(" ")[0]} />
                            <label htmlFor="Moderate">Excellent</label>
                            </fieldset>
                
                          
                         
                        </div>
                
                       )
                    })}
                     
              
              
              
              
              
                  </div>
              
                  
                </div>
                ):(
                  <div className='mt-2 md:text-[2rem] bg-green-200 p-4 shadow-lg rounded-lg w-[100%] text-green-600'>
                    <h1>Feedback Completed</h1>
                  </div>
                )}
  {!(exists)?(<div className="flex  w-[100%] justify-end mt-10">
      
      <button onClick={()=>{handleSubmit()}} className="md:p-4 p-2 m-2 text-white md:text-[1.4rem] bg-blue-500 rounded-full">SUBMIT</button>
      </div>

        
    ):("")}
              
            
              </div> 
               
            </div>
            
            )}
            
            </div>
            <div className='flex text-[0.5rem] md:text-[1rem]  relative bottom-0   text-white bg-[#001529]/[89%] flex-col items-center  justify-center p-4'>
              <h1>with ❤️ IT</h1> 
              <h1>©Copyright 2022</h1>
             
            </div>
            
          </div>
              )}
    

export default Course