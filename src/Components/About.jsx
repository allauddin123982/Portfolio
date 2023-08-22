import React, { useState } from "react";
import AboutMeCards from "./AboutMeCards";
import { FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { VscFileSubmodule } from "react-icons/vsc";
// import aboutvid from '../Images/aboutVid.mp4'
import lotieJson from "../Images/animation_lllzi5ff.json";
import Lottie from "react-lottie";
import MainSkill from "./MainSkill";
import EduCertificate from "./EduCertificate";
function About() {
  const [active, setActive] = useState('mainSkill');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotieJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
   
      <div id="about-section" className=" bg-[#09090a] mt-50 pt-16 pb-10 w-full mx-auto">
     
        <div className=" flex flex-col md:flex-row items-center gap-y-6 justify-center  md:justify-evenly">
          <AboutMeCards
            icon={<FaAward className="text-white text-2xl md:text-3xl " />}
            title={"Experience"}
            exptime={"3+ years Working"}
          />
          <AboutMeCards
            icon={<BsPeopleFill className="text-white text-2xl md:text-3xl " />}
            title={"Clients"}
            exptime={"200+ Worldwide"}
          />
          <AboutMeCards
            icon={
              <VscFileSubmodule className="text-white text-2xl md:text-3xl " />
            }
            title={"Projects"}
            exptime={"80+ Completed"}
          />
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-x-20">
          <div className="videoDiv mt-10 w-[200px] md:w-[220px]">
            {/* <video className="w-[200px] rounded-full border"  autoPlay muted loop>
              <source src={aboutvid}></source>
          </video> */}

            <Lottie options={defaultOptions} />
          </div>
          <div className=" AboutDescDiv mt-10 w-[300px] md:w-[800px] ">
            <h1 className="text-white text-3xl font-bold tracking-widest">
              About me
            </h1>

            <p className="py-2 md:py-5 text-gray-400 text-justify">
            I am a dedicated and ambitious Computer Science student at Capital University, specializing in software development and front-end web development. With a strong foundation in languages such as C, C++, Python, SQL, and PHP. I am also experienced in front-end technologies, including HTML, CSS, Bootstrap, jQuery, AngularJS, JSON, and AJAX. My passion for problem-solving and attention to detail drive me to deliver high-quality work.
            </p>
          </div>
        </div>

        <div className=" max-w-[1240px] mx-auto mt-5">
          <div className=" border-b-2 border-green-500 text-white flex gap-x-10 p-5 font-bold text-xl">
            <p className={` ${active === 'mainSkill' ? 'text-green-400' : 'text-white-400 '} cursor-pointer `} onClick={() => {setActive('mainSkill')}} >Main skills</p>
            <p className={` ${active === 'edu_cert' ? 'text-green-400' : 'text-white-400 '}  cursor-pointer`} onClick={() => {setActive('edu_cert')}}>Education & Certification</p>
          </div>

          <div className="showSkill">
          {
            active === 'mainSkill'?<MainSkill/>: active === 'edu_cert'?<EduCertificate/>:null
          }
          </div>


        </div>
      </div>
    </>
  );
}

export default About;
