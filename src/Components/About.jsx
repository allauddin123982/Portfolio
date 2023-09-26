import React, { useContext, useState } from "react";
import aboutvid from "../Images/aboutVid.mp4";
import MainSkill from "./MainSkill";
import EduCertificate from "./EduCertificate";
import ExperienceDetails from "./ExperienceDetails";
import { CursorContext } from "../context/CursorContext";
function About() {
  const [active, setActive] = useState("mainSkill");
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <>
      <div id="about-section" className=" bg-[#0e0d0d]  pb-10 w-full mx-auto">
        <div className="pt-4 md:pt-12  flex flex-col md:flex-row justify-center items-center gap-x-16">
          <div className="videoDiv mt-10 w-[200px] md:w-[220px]">
            <video
              className="w-[200px] rounded-full border"
              autoPlay
              muted
              loop
            >
              <source src={aboutvid}></source>
            </video>
          </div>
          <div
            className=" AboutDescDiv mt-10 w-[300px] md:w-[800px] "
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <h1 className="text-white text-3xl font-bold tracking-widest">
              About me
            </h1>

            <p className="py-2 md:py-5 text-gray-400 text-justify">
              I am a dedicated and ambitious Computer Science student at Capital
              University, specializing in Software development and Web
              development. I possess a solid foundation in languages such as
              C++, Python, SQL, and PHP. I have hands-on experience with a
              variety of front-end technologies, including HTML, CSS, Bootstrap,
              Tailwind CSS, jQuery, React JS, Angular JS, JSON, and AJAX. My
              passion for problem-solving and attention to detail inspire me to
              consistently deliver high-quality work.
            </p>
          </div>
        </div>

        <div className=" max-w-[1240px] mx-auto mt-8">
          <div className=" border-b-2 border-green-500 text-white flex gap-x-10 p-5 font-bold text-xl ">
            <p
              className={` ${
                active === "mainSkill" ? "text-green-400" : "text-white-400 "
              } cursor-pointer  hover:text-yellow-500`}
              onClick={() => {
                setActive("mainSkill");
              }}
            >
              Main skills
            </p>
            <p
              className={` ${
                active === "edu_cert" ? "text-green-400" : "text-white-400 "
              }  cursor-pointer  hover:text-yellow-500`}
              onClick={() => {
                setActive("edu_cert");
              }}
            >
              Education & Certification
            </p>
            <p
              className={` ${
                active === "experience" ? "text-green-400" : "text-white-400 "
              }  cursor-pointer  hover:text-yellow-500`}
              onClick={() => {
                setActive("experience");
              }}
            >
              Experience
            </p>
          </div>

          <div className="showSkill">
            {active === "mainSkill" ? (
              <MainSkill />
            ) : active === "edu_cert" ? (
              <EduCertificate />
            ) : active === "experience" ? (
              <ExperienceDetails />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
