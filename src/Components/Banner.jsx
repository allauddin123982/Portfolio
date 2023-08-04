import React from "react";
import profile from "../Images/profilepic.png";
import Typed from "react-typed";
import { useState } from "react";
import {BsInstagram} from "react-icons/bs";
import {BiLogoLinkedin, BiLogoGithub} from "react-icons/bi";
import {AiOutlineGoogle} from "react-icons/ai";
const Banner = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="m-20  md:m-40  text-white flex flex-col justify-center items-center">
        <div className="flex gap-x-12">
          <div className="">
            <img
              src={profile}
              alt=""
              className="ms-10 w-[220px] md:w-[290px] rounded-full"
            />
          </div>
          <div className="">
            <h1 className="text-[30px] md:text-[52px] font-bold font-serif tracking-widest">
              Allauddin <p>khan</p>
            </h1>
            <p className="text-3xl font-bold pt-5 md:pt-5">
              <Typed
                strings={[
                  "Web developer",
                  "App developer",
                  "Graphics designer",
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
            </p>
          
            <p className="mt-8 flex gap-x-5 items-center">
                  <a href="https://www.instagram.com/" target="_blank"><BsInstagram className="text-3xl"/></a>
                  <a href="https://www.google.com/" target="_blank"><AiOutlineGoogle className="text-4xl"/></a>
                  <a href=" https://www.linkedin.com/" target="_blank"><BiLogoLinkedin className="text-4xl"/></a>
                  <a href="https://github.com/" target="_blank"><BiLogoGithub className="text-4xl"/></a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
