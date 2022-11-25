import Axios  from "axios";
import { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import {  useState } from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const registerStudent: NextPage = () => {
    
    const [name,setName] = useState(null);
    const [year,setYear] = useState(null)
    const [rollNo,setRollNo] = useState(null);
    const [section,setSection] = useState(null);
    const [batch,setBatch] = useState(null);
    const [semester,setSemester] = useState("")
    const [email,setEmail] = useState(null)
   
    const [departments,setDepartment] = useState();
  
    const [error,setError] = useState("")

    

    const registerStudent = async ()=>{
      
      try{
        const data = {
          name:name,
          department:departments,
          batch:batch,
          rollNo:rollNo,
          email:email,
          semester:semester,
          section:section,
          year:year
        } 
        
        await Axios.post("https://facultyportal.herokuapp.com/api/users/registerStudent",data)
      }catch(error){
        setError(error.message);
                await setTimeout(()=>{setError("")},5000)
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
                <h1>Name:</h1>
                <input  onInput={(e:any)=>{setName(e.target.value)}}  placeholder="Ex. 20MA204" className="rounded-md p-2 h-[2rem] shadow-sm" type="text" required/>
              </div>
              <div className="flex flex-col gap-2">
                <h1>Roll No:</h1>
                <input onInput={(e:any)=>{setRollNo(e.target.value)}} placeholder="Ex. Discrete Structures and Combinatorics" className="rounded-md p-2 h-[2rem] shadow-sm" type="text" required/>
              </div>
              <div className="flex flex-col gap-2">
                <h1>Department:</h1>
                <select onChange={(e:any)=>{setDepartment(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Department</option>  
                  <option value="B.E CSE">B.E CSE</option>
                  <option value="B.Tech IT">B.Tech IT</option>
                  <option value="B.Tech AIDS">B.Tech AIDS</option>
                  <option value="M.Tech CSE">M.Tech CSE</option>
                  <option value="B.E ECE">B.E ECE</option>
                  <option value="B.E EEE">B.E EEE</option>
                  <option value="B.E EIE">B.E EIE</option>
                  <option value="B.E CIVIL">B.E CIVIL</option>
                  <option value="B.E MECH">B.E MECH</option>
                  <option value="B.E RA">B.E RA</option>
                </select>
              </div>



              <div className="flex flex-col gap-2">
                <h1>Batch:</h1>
                <select onChange={(e:any)=>{setBatch(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Credit</option>  
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                  <option value={2026}>2026</option>
                 

                </select>
              </div>
             
              <div className="flex flex-col gap-2">
                <h1>Current Year:</h1>
                <select onChange={(e)=>{setYear(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Year</option>  
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>


                </select>
              </div>

              <div className="flex flex-col gap-2">
                <h1>Current Semester:</h1>
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
                <h1>Email:</h1>
                <input  onInput={(e:any)=>{setEmail(e.target.value)}}  placeholder="Ex. 20MA204" className="rounded-md p-2 h-[2rem] shadow-sm" type="text" required/>
              </div>

              
                
              <button onClick={()=>{registerStudent()}} className="p-2 text-white bg-blue-400 rounded-full">Register Student</button>
              
            </div>
            
            
            
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default registerStudent;
