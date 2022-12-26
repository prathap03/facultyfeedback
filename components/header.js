import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
// import HeaderIcon from './HeaderIcon';
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";

// import { useAuth } from "../context/AuthContext";
const Header = () => {
  // const session = useSession();
  const [userDetails, setUserDetails] = useState(null);
  const [imageUrl,setImageUrl] = useState("https://portal.srec.ac.in/uploads/students_photos/");


  useEffect(() => {
    if (typeof window != "undefined" && localStorage.getItem("userInfo")) {
      setUserDetails(JSON.parse(localStorage.getItem("userInfo")).userDetails);
      setImageUrl(imageUrl+ JSON.parse(localStorage.getItem("userInfo")).userDetails.rollNo+".jpg")
    }
  }, []);

  //  const {logout,user,userDetails,profile} = useAuth()

  return (
    <div className="z-50 w-screen md:w-[100%] flex items-center justify-center p-2 bg-white shadow-md sticky-top-0 lg:px-5">
      {/* Left */}

      <Link href="/">
        <Image
          src="https://www.srec.ac.in/lib/images/logosrec.jpg"
          className="md:w-[5rem] w-[3rem]"
          width={71}
          height={59}
          layout="intrinsic"
          
        />
      </Link>

      <div className="flex items-start justify-start   h-[100%]">
        <h1 className="text-[#0038FF]/70 md:text-[1.8rem]  p-2">SREC</h1>
      </div>
      {/* <div className='flex p-2 ml-2 bg-gray-100 rounded-full'>
                <SearchIcon className='h-6 text-gray-600' />
                <input className='items-center flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex ' type="text" placeholder='Search Facebook' />
            </div> */}
      {/* Center  */}
      <div className="flex flex-shrink-0  items-center justify-center flex-grow h-[100%]">
        <div className="flex md:text-[1.8rem] text-[0.8rem]   space-x-6 ">
          <h1>
            Faculty Feedback <span className="text-[#0038FF]/90">Portal</span>
          </h1>
        </div>
      </div>
      {/* Right */}

      <div className="flex items-center justify-end gap-1 md:gap-4 ">
        <Link href="/profile">
          <div className='md:w-[2.5rem] md:h-[2.5rem] w-[1rem] h-[1rem] overflow-hidden rounded-full shadow-md'>
                        <Image
                        src={imageUrl}
                        width={8}
                        height={8}
                        objectFit="cover"
                        layout="responsive"
                        alt="Profile"
                        priority
                        onError={()=>setImageUrl("https://portal.srec.ac.in/uploads/students_photos/"+userDetails.rollNo+'.jpeg')}
                        
                       
                    />
                    </div>

          
        
        </Link>

        <Link href="/profile">
          <p className="pr-1  text-[0.6rem] md:text-[1.6rem] flex-shrink  whitespace-nowrap">
            {userDetails ? userDetails.name.split(" ")[0] : "Loading.."}
          </p>
        </Link>

        <button
          className=" h-[100%]  w-[100%] text-center p-1 md:p-2 text-[0.6rem] md:text-[1rem] font-semibold text-white bg-blue-500 rounded-md"
          onClick={() => {
            localStorage.removeItem("userInfo");
            location.reload();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
