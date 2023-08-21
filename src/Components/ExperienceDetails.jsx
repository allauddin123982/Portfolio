import React from "react";
import { useState } from "react";
import SamSoftDetails from "./SamSoftDetails";
import AppleDetails from "./AppleDetails";
import GoogleDetails from "./GoogleDetails";
import NetflixDetails from "./NetflixDetails";

function ExperienceDetails() {

    const [active,setActive] = useState('samsoft');
    
    

  return (
    <>
      <div className=" flex flex-col items-center md:flex justify-center text-white p-20 ">
        <div className="border w-[300px] ">

            <ul className="">
                <li className={` p-5 hover:cursor-pointer border-l-4 ${active === 'samsoft' ? 'border-green-500 text-green-300' : 'border-gray-800'} `} onClick={() => setActive("samsoft")}>SamSoft</li>
                <li className={` p-5 hover:cursor-pointer border-l-4 ${active === 'netflix' ? 'border-green-500 text-green-300' : 'border-gray-800'} `} onClick={() => setActive("netflix")}>Netflix </li>
                <li className={` p-5 hover:cursor-pointer border-l-4 ${active === 'google' ? 'border-green-500 text-green-300' : 'border-gray-800'} `} onClick={() => setActive("google")}>Google</li>
                <li className={` p-5 hover:cursor-pointer border-l-4 ${active === 'apple' ? ' border-green-500 text-green-300' : 'border-gray-800'} `} onClick={() => setActive("apple")}>Apple</li>
            
            {/* className={` ${condition ? 'styling' : 'styling '} `} */}
            </ul>

        </div>
        <div className="w-[300px]  ">
            {
                active === 'samsoft' ? <SamSoftDetails/> : active === 'apple' ? <AppleDetails/> : active == 'google'? <GoogleDetails/> :
                active === 'netflix' ? <NetflixDetails/> : null
            
            }
        </div>
      
      </div>
    </>
  );
}

export default ExperienceDetails;
