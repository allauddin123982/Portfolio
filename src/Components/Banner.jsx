import React from "react";
import profile from "../Images/profilepic.png";
import Typed from "react-typed";
import { useState } from "react";
const Banner = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="text-white md:flex justify-center items-center">
        <div className=" p-10 md:p-20  md:flex justify-center ">
          <img src={profile} alt="" className="flex justify-center w-[270px] md:w-[350px] rounded-full"/>
        </div>
        

        <div className="p-5 md:p-16">
          <h1 className="text-[46px] md:text-[100px] font-bold tracking-widest">
            Allauddin khan
          </h1>
          <p className="text-3xl font-bold pt-5 md:pt-20">
            I'm a :{" "}
            <Typed
              strings={["Web developer", "App developer", "Graphics designer"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
