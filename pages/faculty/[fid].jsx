import Axios  from "axios";
import { useRouter } from "next/router";

const CourseFeedback = ()=>{
    const router = useRouter()
    const {fid} = router.query

    const generateReport=async ()=>{
        const data = Axios.get("http://localhost:5000/api/feedback/generate")
        console.log(data)
    }

    return (
        <div><button onClick={()=>{generateReport()}} className="p-2 mt-5 ml-5 text-white bg-blue-400 rounded-full">Generate Report</button></div>
    )
}
export default CourseFeedback;