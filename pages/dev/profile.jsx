// import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



export default function Profile() {
   
    const [rollNo,setRollNo] = useState(1);
    const [imageurl,setImageUrl] = useState('/');
    let rno = Array.from({length:60},(_,i)=>71812105001+i)
   

    const getImage = async(rollNo)=>{
        let url ="https://portal.srec.ac.in/uploads/students_photos/"+rollNo+'.jpg';
       setImageUrl(url)
    //    setRollNo(rollNo)
    
    }

    const checkImage = (url)=>{
        if(typeof window!=='undefined'){
            
        var image = new Image();
      
        image.src=url+'?_='+(new Date().getTime());
        
        image.onload = function() {
       
          if (this.width > 0) {
           
            return true;
          }
        }
        
        
        image.onerror = function() {
            console.log("hihihihi")
           
          return false;
        }

        
        
    }
        
      }
  
    
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
            <div className='flex gap-2 p-2 justify-center items-center bg-red-500/50 backdrop-blur-md shadow-md'>
            <h1>
                Roll No:
            </h1>
            <input onInput={(e)=>{getImage(e.target.value)}} onBlur={(e)=>{getImage(e.target.value)}} className='p-2' type="text"/>
            </div>
            <div className='flex gap-2 p-2 flex-wrap justify-center items-center bg-red-500/50 backdrop-blur-md shadow-md'>
            <h1>
                SREC DB Profile:
            </h1>
            {rno?rno.map((roll)=>{    
                
                let temp="https://portal.srec.ac.in/uploads/students_photos/"+roll;
                let url;
                console.log(checkImage(temp+'.jpg'))
               if(checkImage(temp+'.jpg')){
                
                url = temp+'jpg';
                return(  

                    <>
                    
                    <img
                    id={roll}
                    src={url}
                    width={125}
                    height={125}
                
                    />
                    </>  
                )
               }else{
                url = temp+'.jpg'
         
                return(  

                    <>
                    
                    <img
                    id={roll}
                    src={url}
                    width={125}
                    height={125}
                
                    />
                    </>  
                )
               }
               

                
                
           }):''}
            <div className='flex gap-2'>
            
            <img
           src={imageurl}
           width={250}
           height={250}
           onError={()=>setImageUrl("https://portal.srec.ac.in/uploads/students_photos/"+rollNo+'.jpeg')}
           />
         
            </div>
            </div>


        </div>

    )
}
