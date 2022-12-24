import '../styles/globals.css'
import Router from 'next/router'
import {useState,useEffect} from 'react';
import Loader from '../components/Loader';
import {ClipLoader} from 'react-spinners';
import { motion } from 'framer-motion';



function MyApp({ Component, pageProps,router }) {
  

  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {

    Router.events.on("routeChangeStart", (url)=>{
      console.log(url,isLoading)
      setIsLoading(true)
    }); 

    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });
  
    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    }); 
  }, [Router])
  


  return( 
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
    }}>
  {isLoading && (<div className='flex items-center justify-center w-screen h-screen '><ClipLoader size={80}   color="#3693d6"/></div>)}
  
  <Component {...pageProps} />
</motion.div>
  )
}

export default MyApp
