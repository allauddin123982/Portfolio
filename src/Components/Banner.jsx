import React from "react";
import mainPic from "../Images/mee.jpg";
import Typed from "react-typed";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import bannerBG from "../Images/bannerBG.jpg";
import ParticlesContainer from "./ParticlesContainer";
const Banner = () => {
  return (
    <>
      <div
        className="border border-black"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <ParticlesContainer />
        <div
          className="my-20 md:m-28 lg:m-52 flex flex-col lg:flex-row justify-center items-center gap-x-2 text-white"
          // style={{ zIndex: "-1" }} // Set higher z-index for content
        >
          <div className="drop-shadow-[0px_0px_12px_rgba(255,255,255,1.5)] ">
            <img
              src={mainPic}
              alt=""
              className="w-auto h-[220px] md:w-[275px] md:h-[280px]  lg:w-[280px] lg:h-[300px] rounded-full  "
            />
          </div>
          <div className="m-5" style={{ zIndex: "1" }}>
            <h1 className="Name gap-x-2 md:flex-col text-[28px] md:text-[42px] font-bold  tracking-widest">
              <p>Allauddin </p>
              <p>khan</p>
            </h1>
            <p className="text-xl md:text-2xl font-semibold pt-2 md:pt-5">
              <Typed
                strings={["Web developer", "App developer", "Freelancer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
            </p>
            <div className="text-white flex items-center gap-x-5 mt-3">
              <a
                href="https://www.instagram.com/allauddin4973/"
                target="_blank"
              >
                <BsInstagram className="text-2xl font-bold md:text-4xl hover:text-[#810C55]" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                className="logo"
              >
                <AiOutlineGoogle className=" text-3xl md:text-5xl hover:text-blue-500 " />
              </a>
              <a
                href="https://www.linkedin.com/in/allauddin-khan-1515b1229/"
                target="_blank"
              >
                <BiLogoLinkedin className="text-3xl md:text-5xl hover:text-[#1CDCE8]" />
              </a>
              <a href="https://github.com/allauddin123982" target="_blank">
                <BiLogoGithub className="text-3xl md:text-5xl hover:text-yellow-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
