import React from "react";
import AboutMeCards from "./AboutMeCards";
import {FaAward} from "react-icons/fa";
import {BsPeopleFill} from "react-icons/bs";
import {VscFileSubmodule} from "react-icons/vsc";
function About() {
  return (
    <>
      

      <div className=" mt-10 max-w-[1440px] mx-auto">
        <div className=" text-center ms-16  md:grid grid-cols-3">
          <AboutMeCards icon={<FaAward className="text-white text-3xl ms-16 md:ms-20"/>} title={"Experience"} exptime={"3+ years Working"} />
          <AboutMeCards icon={<BsPeopleFill className="text-white text-3xl ms-16 md:ms-20"/>} title={"Clients"} exptime={"200+ Worldwide"} />
          <AboutMeCards icon={<VscFileSubmodule className="text-white text-3xl ms-16 md:ms-20"/>} title={"Projects"} exptime={"80+ Completed"} />
        </div>
        <div className="p-10 md:mt-12 text-white flex justify-center">
        <h1 className="text-3xl font-bold border-b-[3px] tracking-widest">
          About me{" "}
        </h1>
      </div>
        <div className="p-10 ">
          <p className="text-gray-400 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            aliquid totam provident, quasi dicta. Itaque assumenda explicabo
            magni, inventore ipsa veniam ullam quibusdam nostrum temporibus
            autem perspiciatis a porro?
            ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            aliquid totam provident,
            ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            aliquid totam provident,
            ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            aliquid totam provident,
            ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            aliquid totam provident,ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            aliquid totam provident,ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
            aliquid totam provident,
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
