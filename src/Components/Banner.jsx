import React from "react";
import profile from "../Images/profilepic.png";
import Typed from "react-typed";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
const Banner = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="md:m-40 flex flex-col md:flex-row justify-center items-center gap-x-4 text-white">
        <div className="">
          <img
            src={profile}
            alt=""
            className=" w-[180px] md:w-[280px] rounded-full"
          />
        </div>
        <div className=" m-2 ">
          <h1 className="flex gap-x-2 md:flex-col text-[28px] md:text-[42px] font-bold font-serif tracking-widest ">
            <p className="">Allauddin </p>
            <p>khan</p>
          </h1>
          <p className="text-xl md:text-2xl font-bold md:pt-5">
            <Typed
              strings={["Web developer", "App developer", "Graphics designer"]}
              typeSpeed={40}
              backSpeed={60}
              loop
            />
          </p>

          <p className="mt-5 flex items-center gap-x-5 ">
            <a href="https://www.instagram.com/" target="_blank">
              <BsInstagram className="text-2xl font-bold md:text-4xl" />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <AiOutlineGoogle className="text-3xl md:text-5xl" />
            </a>
            <a href=" https://www.linkedin.com/" target="_blank">
              <BiLogoLinkedin className="text-3xl md:text-5xl" />
            </a>
            <a href="https://github.com/" target="_blank">
              <BiLogoGithub className="text-3xl md:text-5xl" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
