import React from "react";

import imgproj1 from "../Images/proj1.png";
import imgproj2 from "../Images/proj2.png";
import imgproj3 from "../Images/proj3.jpg";
import ProjCard from "./ProjCard";

const ProjectCards = () => {
  return (
    <>
    <div className="projects bg-[#09090a] p-10">

      <div id="project-section" className="text-white flex justify-center">
        <h1 className="text-3xl font-bold tracking-widest">My Projects</h1>
      </div>
    <div className=" max-w-[1500px] mx-auto md:grid grid-cols-3 justify-center">
    <ProjCard img={imgproj1} title={"Lorem ipsum"} desc={"dolor sit amet consectetu sit amet   dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciuntdolor sit amet consectetur adipisicing elit."}/>
    <ProjCard img={imgproj2} title={"Lorem ipsum"} desc={"dolor sit amet consectetu sit amet   dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciunt. dolor sit amet consectetur adipisicing elit."}/>
    <ProjCard img={imgproj3} title={"Lorem ipsum"} desc={"dolor sit amet consectetu sit amet   dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciunt. dolor sit amet consectetur adipisicing elit."}/>
    </div>
      
    </div>
    </>
  );
};

export default ProjectCards;
