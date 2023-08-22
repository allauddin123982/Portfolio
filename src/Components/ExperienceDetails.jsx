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
      <div className="max-w-[1240px] mx-auto mt-5  text-white p-10 ">
        <div className="w-[300px] ">

            <ul className="flex flex-col gap-y-10 md:flex-row gap-x-20 font-semibold text-xl">
                <li className={` hover:cursor-pointer  ${active === 'samsoft' ? 'text-green-400' : 'text-white-400 '} `} onClick={() => setActive("samsoft")}>SamSoft</li>
                <li className={` hover:cursor-pointer  ${active === 'netflix' ?'text-green-400' : 'text-white-400 '} `} onClick={() => setActive("netflix")}>Netflix </li>
                <li className={` hover:cursor-pointer  ${active === 'google' ?'text-green-400' : 'text-white-400 '} `} onClick={() => setActive("google")}>Google</li>
                <li className={` hover:cursor-pointer  ${active === 'apple' ? 'text-green-400' : 'text-white-400 '} `} onClick={() => setActive("apple")}>Apple</li>
            
            {/* className={` ${condition ? 'styling' : 'styling '} `} */}
            </ul>

        </div>
        <div className=" w-[300px] md:w-[400px] mt-10 ">
            {
                active === 'samsoft' ? <SamSoftDetails/> : active === 'apple' ? <AppleDetails/> : active === 'google'? <GoogleDetails/> :
                active === 'netflix' ? <NetflixDetails/> : null
            
            }
        </div>
      
      </div>
    </>
  );
}

export default ExperienceDetails;
