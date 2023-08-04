import React from "react";
import TestinomialsCard from "./TestinomialsCard";
import profile from "../Images/profilepic.png";


function Testimonials() {
  return (
    <>
      <div className=" mt-10 md:mt-32 text-white flex justify-center">
        <h1 className="text-3xl font-bold border-b-[3px] tracking-widest">
          Testinomials
        </h1>
      </div>
      <div className=" max-w-[1640px] mx-auto md:grid grid-cols-3">
        <TestinomialsCard
          imgg={profile}
          title={"WebFlow"}
          desc={
            "dolor sit amet consectetu sit amer sit amet consectetu sit amet   dolort  dolor sit amet consectetur adipisicing adipisicing elit. Laboriosam, nesciuntdolor sit amet consectetur adipisicing elit."
          }
          name={"John Eliot"}
          nameDesc={"Marketing Executative"}
        />
        <TestinomialsCard
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
        />
      </div> 
    </>
  );
}

export default Testimonials;
