import React from "react";

import imgproj1 from "../Images/proj1.png";
import imgproj2 from "../Images/proj2.png";
import imgproj3 from "../Images/proj3.jpg";
import ProjCard from "./ProjCard";

const ProjectCards = () => {
  return (
    <>
      <div className="mt-10 md:mt-28 text-white flex justify-center">
        <h1 className="text-3xl font-bold border-b-[3px] tracking-widest">My Projects</h1>
      </div>
    < div className=" max-w-[1640px] mx-auto md:grid grid-cols-3">
    <ProjCard img={imgproj1} title={"Lorem ipsum"} desc={"dolor sit amet consectetu sit amet   dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciuntdolor sit amet consectetur adipisicing elit."}/>
    <ProjCard img={imgproj2} title={"Lorem ipsum"} desc={"dolor sit amet consectetu sit amet   dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciunt. dolor sit amet consectetur adipisicing elit."}/>
    <ProjCard img={imgproj3} title={"Lorem ipsum"} desc={"dolor sit amet consectetu sit amet   dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciunt. dolor sit amet consectetur adipisicing elit."}/>
    </div>
      
    </>
  );
};

export default ProjectCards;
