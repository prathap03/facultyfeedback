// import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



export default function Profile() {
   
    const [rollNo,setRollNo] = useState(1);
    const [imageurl,setImageUrl] = useState('/');
    let rno = Array.from({length:60},(_,i)=>71812105001+i)
    const [purl,setPurl] = useState([]);
   
    useEffect(() => {
        
        const init = (temp)=>{
        checkImage(temp)
       
        }
         for(let i=71812105001;i<=71812105060;i++){
            let temp="https://portal.srec.ac.in/uploads/students_photos/"+i;
            let url;
            init(temp);
          
         }
        
    }, [])
    

    const getImage = async(rollNo)=>{
        let url ="https://portal.srec.ac.in/uploads/students_photos/"+rollNo+'.jpg';
       setImageUrl(url)
    //    setRollNo(rollNo)
    
    }

    const checkImage =  (url)=>{
        if(typeof window!=='undefined'){
            console.log(purl)
        var image = new Image();
      
        
        
        image.onload = function() {
       
          if (this.width > 0) {
            if(!(purl.includes(image.src))){
                purl.push(image.src)
                setPurl(purl)
               }
           
          }
        }
        image.src=url+".jpg";
        
        
        image.onerror = function() {
            
            console.log(purl)
           if(!(purl.includes(url+".jpeg"))){
            purl.push(url+".jpeg")
            setPurl(purl)
           }
         
        }
        
        
        
    }
        
     }

     
  
    console.log(purl)

    return (
        
        <div className='w-screen h-screen flex flex-col  items-center gap-2'>
            <div className='flex gap-2 p-2 m-5 justify-center items-center bg-red-500/50 backdrop-blur-md shadow-md'>
            
            <h1>
                Roll No:
            </h1>
            <input onInput={(e)=>{getImage(e.target.value)}} onBlur={(e)=>{getImage(e.target.value)}} className='p-2' type="text"/>
            
            </div>
            <h1>
                SREC DB Profile:
            </h1>
            <div className='flex   m-12 gap-2 p-4 flex-wrap justify-center items-center bg-red-500/50 backdrop-blur-md shadow-md'>
            
            
           {purl?purl.map((url,idx)=>{
            return(  

                <>
                
                <img
                id={idx}
                src={url}
                width={125}
                height={125}
            
                />
                </>  
            )
           }):(
            <h1>Loading</h1>
           )}
            {/* <div className='flex gap-2'>
            
            <img
           src={imageurl}
           width={250}
           height={250}
           onError={()=>setImageUrl("https://portal.srec.ac.in/uploads/students_photos/"+rollNo+'.jpeg')}
           />
         
            </div> */}
            </div>


        </div>

    )
}
