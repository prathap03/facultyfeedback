import '../styles/globals.css'
import Router from 'next/router'
import {useState,useEffect} from 'react';
import Loader from '../components/loader';
import {ClipLoader} from 'react-spinners';



function MyApp({ Component, pageProps }) {
  

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
  <>
  {isLoading && (<div className='flex items-center justify-center w-screen h-screen '><ClipLoader size={80}   color="#3693d6"
       /></div>)}
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
