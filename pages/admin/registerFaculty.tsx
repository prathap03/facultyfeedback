import Axios  from "axios";
import { access } from "fs";
import { NextPage } from "next";
import Image from "next/legacy/image";
import Link from "next/link";
import {  useState } from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar";

const registerFaculty: NextPage = () => {
    
    const [name,setName] = useState(null);
    const [year,setYear] = useState(null)
    const [rollNo,setRollNo] = useState(null);
    const [section,setSection] = useState(null);
    const [batch,setBatch] = useState(null);
    const [semester,setSemester] = useState("")
    const [email,setEmail] = useState(null)
   
    const [departments,setDepartment] = useState();
  
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")

    

    const registerFaculty = async ()=>{
      
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

      
        
        await Axios.post("https://facultyportal.herokuapp.com/api/users/registerStudent",data).then((result)=>{
        console.log(result)  
        if(result.data !="User Already Exists"){
            setSuccess("Student Registered Successfully");
          setTimeout(()=>{setError("")},5000)
          }else{
            setError("Student Already Exists");
            setTimeout(()=>{setError("")},5000)
          }
        })
      
        
      }catch(error){
        setError(error.message);
        setTimeout(()=>{setError("")},5000)
      }
      


    }

  return (
    <div className="flex flex-col h-[100%] min-h-screen bg-slate-400/[60%] ">
      <Header />
      {/*admin header*/}
      <div className="h-[100%] flex-grow flex  w-[100%] ">
        {/* <Navbar /> */}
        <div className="flex w-[100%]">
          <div className="flex  items-center flex-col flex-grow p-[2rem]  ">
            <div  className="flex gap-4 w-[40%] p-4 flex-col scale-110   h-max">
            {error !=""?( <h1 className="p-2 bg-red-200 rounded-md w-[100%] mt-5 text-red-600 shadow-md">{error}</h1>):""}
            {success !=""?( <h1 className="p-2 bg-green-200 rounded-md w-[100%] mt-5 text-green-600 shadow-md">{success}</h1>):""}
             
              <h1 className="text-[2rem]">Register Faculty</h1>
              <div className="flex gap-2 ">
              <div className="flex flex-col w-[25%] gap-2">
                <h1>Suffix:</h1>
                <select onChange={(e:any)=>{setDepartment(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Suffix</option>  
                  <option value="B.E CSE">Dr.</option>
                  <option value="B.Tech IT">Mr.</option>
                  <option value="B.Tech AIDS">Mrs.</option>
                  <option value="M.Tech CSE">Ms.</option>
                 
                </select>
              </div>
              <div className="flex flex-col w-[100%] gap-2">
                <h1>Name:</h1>
                <input  onInput={(e:any)=>{setName(e.target.value)}}  placeholder="Ex. Jhon Doe" className="rounded-md p-2 h-[2rem] shadow-sm" type="text" required/>
              </div>
              
              </div>
              <div className="flex flex-col gap-2">
                <h1>Designation:</h1>
                <select onChange={(e:any)=>{setDepartment(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Designation</option>  
                  <option value="B.E CSE">AP</option>
                  <option value="B.Tech IT">AP(Sr.Gr)</option>
                  <option value="B.Tech AIDS">AP(Sl.Gr)</option>
                  <option value="M.Tech CSE">Assso.Prof</option>
                  <option value="B.E ECE">ASP</option>
                  <option value="B.E EEE">Prof</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <h1>Department:</h1>
                <select onChange={(e:any)=>{setDepartment(e.target.value)}} className="rounded-md p-1 shadow-sm h-[2rem]" name="department" id="cars" required>
                  <option value=""  selected>Select Department</option>  
                  <option value="MECH">Mechanical Engineering</option>
                  <option value="EEE">Electrical and Electronics Engineering</option>
                  <option value="ECE">Electronics & Communication Engineering</option>
                  <option value="CSE">Computer Science and Engineering</option>
                  <option value="EIE">Electronics & Instrumentation Engineering</option>
                  <option value="R&A">Robotics and Automation</option>
                  <option value="BME">Biomedical Engineering</option>
                  <option value="Civil">Civil Engineering</option>
                  <option value="IT">Information Technology</option>
                  <option value="AI&DS">Artificial Intelligence and Data Science</option>
                  <option value="Nano">Nano Science and Technology</option>
                  <option value="MBA">Management Studies</option>
                  <option value="HSBC">Science and Humanities</option>
                  <option value="Chem">Chemistry</option>
                </select>
              </div>

              



              
             
              

             

              {/* <div className="flex flex-col gap-2">
                <h1>Email:</h1>
                <input  onInput={(e:any)=>{setEmail(e.target.value)}}  placeholder="Ex. example.rollno@srec.ac.in" className="rounded-md p-2 h-[2rem] shadow-sm" type="text" required/>
              </div> */}

              
                
              <button onClick={()=>{registerFaculty()}} className="p-2 text-white bg-blue-400 rounded-full">Register Faculty</button>
              
            </div>
            
            
            
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default registerFaculty;
