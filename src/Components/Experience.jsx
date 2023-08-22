import React from "react";
import ExperienceDetails from "./ExperienceDetails";

function Experience() {
  return (
    <>
      <div  className="mt-20 md:mt-32 text-white flex justify-center">
        <h1 className="text-3xl font-bold tracking-widest">
          Where I've Worked
        </h1>
      </div>
      
      <ExperienceDetails />

      <div className=" max-w-[320px] md:max-w-[1300px] mx-auto mt-10" >
        <p className="text-gray-400 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
          aliquid totam pro ipsum dolor sit amet consectetur adipisicing elit.
          Vel nihil aliquid totam provident ipsum dvident, quasi dicta. Itaque
          assumenda explicabo magni, inventore ipsa
        </p>
      </div>
    </>
  );
}

export default Experience;
