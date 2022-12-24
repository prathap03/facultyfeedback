import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



export default function Profile() {
   
    const [rollNo,setRollNo] = useState(null);
    const [imageurl,setImageUrl] = useState('/');

    const getImage = async(rollNo)=>{
        let url ="https://portal.srec.ac.in/uploads/students_photos/"+rollNo;
       setImageUrl(url)
    
    }
    
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
            <div className='flex gap-2 p-2 justify-center items-center bg-red-500/50 backdrop-blur-md shadow-md'>
            <h1>
                Roll No:
            </h1>
            <input onInput={(e)=>{getImage(e.target.value)}} onBlur={(e)=>{getImage(e.target.value)}} className='p-2' type="text"/>
            </div>
            <div className='flex gap-2 p-2 flex-col justify-center items-center bg-red-500/50 backdrop-blur-md shadow-md'>
            <h1>
                Profile:
            </h1>
            <div className='flex gap-2'>
            <Image
            src={imageurl+'.jpg'||"/profile.jpeg"}
            width={250}
            height={250}
            />
            <Image
            src={imageurl+'.jpeg'||"/profile.jpeg"}
            width={250}
            height={250}
            />
            </div>
            </div>


        </div>

    )
}
