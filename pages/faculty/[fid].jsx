import Axios  from "axios";
import { useRouter } from "next/router";
import { useState } from "react";


const CourseFeedback = ()=>{
    const router = useRouter()
    const {fid} = router.query
    const [report,setReport] = useState("")


    

    const generateReport=async ()=>{
        const {data} =await Axios.get("https://private-autumn-pullover.glitch.me/api/feedback/generate")
        setReport(data.feedback)
    }

    return (
        <div className="flex h-screen">
            {report?(
                <div className="flex flex-col gap-1">
                <h1 className="p-1">Punchuality: {report.punctuality}</h1>
                <h1 className="p-1">Regularity: {report.regularity}</h1>
                <h1 className="p-1">Personality: {report.personality}</h1>
                <h1 className="p-1">Pace of Teaching: {report.pace}</h1>
                <h1 className="p-1">Encouraging to Raise Doubts: {report.raiseDoubts}</h1>
                <h1 className="p-1">Ability to maintain Discipline: {report.discipline}</h1>
                <h1 className="p-1">Feedback resolution: {report.feedback}</h1>
                <h1 className="p-1">Ability to maintain attention: {report.attention}</h1>
                <h1 className="p-1">Use of Examples, Illustration: {report.examples}</h1>
                    
                </div>
            ):(
                <div>
                     <button onClick={()=>{generateReport()}} className="p-2 mt-5 ml-5 text-white bg-blue-400 rounded-full">Generate Report</button>
                </div>
            )}
            
           
            
           </div>
    )
}
export default CourseFeedback;