import React from "react";
import { useState } from "react";
import SamSoftDetails from "./SamSoftDetails";

function ExperienceDetails() {
  const [active, setActive] = useState("samsoft");

  return (
    <>
      <div className="max-w-[1240px] mx-auto mt-5  text-white p-6 ">
        <div className="w-[300px] ">
          <ul className="flex flex-col gap-y-10 md:flex-row gap-x-20 font-semibold text-xl">
            <li
              className={` hover:cursor-pointer  ${
                active === "samsoft" ? "text-green-400" : "text-white-400 "
              } `}
              onClick={() => setActive("samsoft")}
            >
              SAMSOFT
            </li>

            {/* className={` ${condition ? 'styling' : 'styling '} `} */}
          </ul>
        </div>
        <div className=" w-[300px] md:w-[400px] mt-6 ">
          {active === "samsoft" ? <SamSoftDetails /> : null}
        </div>
      </div>
    </>
  );
}

export default ExperienceDetails;
