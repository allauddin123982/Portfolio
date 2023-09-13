import React from "react";
import TestinomialsCard from "./TestinomialsCard";
import profile from "../Images/profilepic.png";


function Testimonials() {
  return (
    <>
    <div className="Testimonials mt-24 pt-16 pb-10 bg-[#09090a]">
    
      <div id="tes-sec" className="  text-white flex justify-center">
        <h1 className="text-3xl font-bold tracking-widest">
          
        </h1>
      </div>
      <div className=" max-w-[1300px] mx-auto flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 p-10">
        <TestinomialsCard
          imgg={profile}
          title={"Sams"}
          desc={
            "dolor sit amet consectetu sit amer sit amet consectetu sit amet   dolort  dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciuntdolor sit amet consectetur adipisicing elit."
          }
          name={"John Eliot"}
          nameDesc={"Marketing Executative"}
        />
        {/* <TestinomialsCard
        imgg={profile}
          title={"Facebook"}
          desc={
            "dolor sit amet consectetu sit amer sit amet consectetu sit amet   dolort  dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciuntdolor sit amet consectetur adipisicing elit."
          }
          name={"John Adam"}
          nameDesc={"Senior Enginnering Manager"}
          />
        <TestinomialsCard
        imgg={profile}
        title={"Google"}
        desc={
          "dolor sit amet consectetu sit amer sit amet consectetu sit amet   dolort  dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciuntdolor sit amet consectetur adipisicing elit."
        }
        name={"Adam smith"}
        nameDesc={"Engineering Manager"}
        /> */}
      </div> 
        </div>
    </>
  );
}

export default Testimonials;
