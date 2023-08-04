import React from "react";
import { useState } from "react";
import SamSoftDetails from "./SamSoftDetails";
import AppleDetails from "./AppleDetails";
import GoogleDetails from "./GoogleDetails";
import NetflixDetails from "./NetflixDetails";

function ExperienceDetails() {

    const [active,setActive]=useState('samsoft');
    
    

  return (
    <>
      <div className="mt-20 text-white max-w-[1240px] mx-auto md:grid grid-cols-3 gap-20 ">
        <div className="-600 col-span-1">

            <ul className="m-5 md:m-0">
                <li className={` p-5 hover:cursor-pointer border-l-4 ${active === 'samsoft' ? 'border-green-500 text-green-300' : 'border-gray-800'} `} onClick={() => setActive("samsoft")}>SamSoft</li>
                <li className={` p-5 hover:cursor-pointer border-l-4 ${active === 'netflix' ? 'border-green-500 text-green-300' : 'border-gray-800'} `} onClick={() => setActive("netflix")}>Netflix </li>
                <li className={` p-5 hover:cursor-pointer border-l-4 ${active === 'google' ? 'border-green-500 text-green-300' : 'border-gray-800'} `} onClick={() => setActive("google")}>Google</li>
                <li className={` p-5 hover:cursor-pointer border-l-4 ${active === 'apple' ? ' border-green-500 text-green-300' : 'border-gray-800'} `} onClick={() => setActive("apple")}>Apple</li>
            
            {/* className={` ${condition ? 'styling' : 'styling '} `} */}
            </ul>

        </div>
        <div className=" m-5 md:mt-1 col-span-2">
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
