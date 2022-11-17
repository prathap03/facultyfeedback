import Axios  from "axios";
import { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import {  useState } from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const createCourse: NextPage = () => {
    const [courseCode,setCourseCode] = useState("")
    const [courseTitle,setCourseTitle] = useState("")
    const [courseDepartment,setCourseDepartment] = useState("")
    const [courseCredits,setCourseCredits] = useState("")
    const [year,setYear] = useState("")
    const [semester,setSemester] = useState("")
    const [courseType,setCourseType] = useState("")
    const [departments,setDepartment] = useState(["B.Tech IT","B.Tech AIDS","B.E CSE","M.Tech CSE","B.E ECE","B.E EEE","B.E EIE","B.E CIVIL","B.E MECH","B.E RA"]);
    const [commonTo,setCommonTo] = useState([])
    const [selectedDepartment,setSelectedDepartment]= useState("");
    const [error,setError] = useState("")

    const CreateCourse = async ()=>{
        if(commonTo.length>0){
            try{
           const data = {
            courseCode:courseCode,
            courseTitle:courseTitle,
            courseDepartment:courseDepartment,
            courseCredits:courseCredits,
            courseType:courseType,
            year:year,
            semester:semester,
            commonTo:commonTo
           }
      
            await Axios.post("http://localhost:5000/api/course/create",data)
            
          
            }catch(error){
                setError(error.message);
                await setTimeout(()=>{setError("")},5000)
               
            }
        }
    }

    const removeDepartment = (department)=>{
        
        let temp = [...commonTo]
        let temp2 = [...departments]
        
        console.log(department)

        temp.splice(temp.indexOf(department,1))
        temp2.push(department)

        setCommonTo(temp)
        setDepartment(temp2)
    }

    const addDepartment = ()=>{
        
        let temp = [...commonTo]
        let temp2 = [...departments]
        
       if(!(selectedDepartment=="default" || selectedDepartment=="") && !(commonTo.includes(selectedDepartment))){
        temp.push(selectedDepartment)
        temp2.splice(temp2.indexOf(selectedDepartment),1)
        // commonTo[0].push(selectedDepartment)
        setCommonTo(temp)
        setDepartment(temp2)
        
       }

    }

  return (
    <div className="flex flex-col h-[100%] bg-slate-400/[60%] ">
      <Header />
      {/*admin header*/}
      <div className="h-[100%] flex  w-[100%] ">
        <Navbar />
        <div className="flex w-[100%]">
          <div className="flex  items-center flex-col flex-grow p-[2rem]  ">
            <div  className="flex gap-4 w-[60%] p-4 flex-col scale-110   h-max">
            {error !=""?( <h1 className="p-2 bg-red-200 rounded-md w-[100%] mt-5 text-red-600 shadow-md">{error}</h1>):""}
             
              <h1 className="text-[2rem]">Create Course</h1>
              <div className="flex flex-col gap-2">
                <h1>Course Code:</h1>
                <input onInput={(e)=>{setCourseCode(e.target.value)}} placeholder="Ex. 20MA204" className="rounded-md p-2 h-[2rem] shadow-sm" type="text" required/>
              </div>
              <div className="flex flex-col gap-2">
                <h1>Course Title:</h1>
                <input onInput={(e)=>{setCourseTitle(e.target.value)}} placeholder="Ex. Discrete Structures and Combinatorics" className="rounded-md p-2 h-[2rem] shadow-sm" type="text" required/>
              </div>
              <div className="flex flex-col gap-2">
                <h1>Course Department:</h1>
                <select onChange={(e)=>{setCourseDepartment(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Department</option>  
                  <option value="volvo">B.E CSE</option>
                  <option value="saab">B.Tech IT</option>
                  <option value="mercedes">B.Tech AIDS</option>
                  <option value="mercedes">M.Tech CSE</option>
                  <option value="audi">B.E ECE</option>
                  <option value="audi">B.E EEE</option>
                  <option value="audi">B.E EIE</option>
                  <option value="audi">B.E CIVIL</option>
                  <option value="audi">B.E MECH</option>
                  <option value="audi">B.E RA</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <h1>Course Credits:</h1>
                <select onChange={(e)=>{setCourseCredits(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Credit</option>  
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                 

                </select>
              </div>
              <div className="flex flex-col gap-2">
                <h1>Course Commonto:</h1>
                <div className="flex gap">
                <select onChange={(e)=>{setSelectedDepartment(e.target.value)}} className="p-1 rounded-full rounded-r-none w-[100%]" required>
                    <option value="default" selected>Select Department to add</option>
                    {departments.map((department)=>{
                        return (<option   className="" value={department}>{department}</option>)
                    })}
                </select>
                <button onClick={()=>{addDepartment()}} className="p-2 border-l-0 rounded-l-none text-white shadow-md bg-blue-500 rounded-full w-[20%]">Add Department</button>
                </div>
                <div className="flex flex-wrap mt-2 gap-2 p-4 bg-white/[45%] shadow-md backdrop-blur-[60%] rounded-lg">
                    {commonTo.length>0?commonTo.map((common)=>{
                        return (
                            <div className="p-2 text-white text-center rounded-full flex gap-2 min-w-[4rem] shadow-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
                        <h1>{common}</h1>
                        <div className="rounded-full ">
                            <h1 id={common} onClick={(e)=>{removeDepartment(e.target.id)}} className="cursor-pointer">X</h1>
                        </div>
                    </div>
                        )
                    }):"Common Departments Preview"}
                    
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1>Course Assigned Year:</h1>
                <select onChange={(e)=>{setYear(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Year</option>  
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>


                </select>
              </div>

              <div className="flex flex-col gap-2">
                <h1>Course Assigned Semester:</h1>
                <select onChange={(e)=>{setSemester(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Semester</option>  
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>


                </select>
              </div>

              <div className="flex flex-col gap-2">
                <h1>Course Type:</h1>
                <select onChange={(e)=>{setCourseType(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Course Type</option>  
                  <option value="Theory">Theory</option>
                  <option value="Core">Core</option>
                  <option value="Theory Cum Lab">Theroy Cum Lab</option>
                  <option value="Laboratory">Laboratory</option>
 


                </select>
              </div>
                
              <button onClick={()=>{CreateCourse()}} className="p-2 text-white bg-blue-400 rounded-full">Create Course</button>
              
            </div>
            
            
            
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default createCourse;
