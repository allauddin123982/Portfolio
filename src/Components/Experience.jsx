import React from "react";
import ExperienceDetails from "./ExperienceDetails";

function Experience() {
  return (
    <>
    <div className="experience pb-10 bg-[#050506]">
    <div className="absolute left-0 mt-[-60px] md:mt-[-120px] w-32 md:w-60  ">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              id="blobSvg"
            >
              <path
                id="blob"
                // d="M437,319.5Q441,389,381,429Q321,469,252,462Q183,455,141.5,407Q100,359,50,304.5Q0,250,53.5,198Q107,146,150,110.5Q193,75,259.5,45Q326,15,368,74.5Q410,134,421.5,192Q433,250,437,319.5Z"
                fill="#00cec9"
                >
                <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                 values="M437,319.5Q441,389,381,429Q321,469,252,462Q183,455,141.5,407Q100,359,50,304.5Q0,250,53.5,198Q107,146,150,110.5Q193,75,259.5,45Q326,15,368,74.5Q410,134,421.5,192Q433,250,437,319.5Z;

                M424.5,307.5Q409,365,361,403.5Q313,442,244,461Q175,480,117.5,434Q60,388,36,319Q12,250,30,176.5Q48,103,113,66.5Q178,30,249,33Q320,36,358,90Q396,144,418,197Q440,250,424.5,307.5Z;
                
                M381,284.5Q290,319,209.5,389.5Q129,460,81,355Q33,250,92,164.5Q151,79,245,87Q339,95,405.5,172.5Q472,250,381,284.5Z;
                
                M408,306.5Q316,363,224,408.5Q132,454,101.5,352Q71,250,118.5,177.5Q166,105,234,132.5Q302,160,401,205Q500,250,408,306.5Z;

                M388,289Q295,328,251,326.5Q207,325,112.5,287.5Q18,250,93.5,179.5Q169,109,247.5,113.5Q326,118,403.5,184Q481,250,388,289Z;
                
                M360,307Q316,364,255.5,354Q195,344,165,297Q135,250,131,143.5Q127,37,249,39Q371,41,387.5,145.5Q404,250,360,307Z;

                M393,337.5Q351,425,278,376Q205,327,172,288.5Q139,250,138,152.5Q137,55,222,103.5Q307,152,371,201Q435,250,393,337.5Z;

                M437,319.5Q441,389,381,429Q321,469,252,462Q183,455,141.5,407Q100,359,50,304.5Q0,250,53.5,198Q107,146,150,110.5Q193,75,259.5,45Q326,15,368,74.5Q410,134,421.5,192Q433,250,437,319.5Z

                "></animate>

              </path>
            </svg>
    </div>
    
      <div  className="pt-20 md:pt-20  text-white flex justify-center">
        <h1 className="text-3xl font-bold tracking-widest">
          Where I've Worked
        </h1>
      </div>
      
      <ExperienceDetails />

      <div className=" max-w-[320px] md:max-w-[1300px] mx-auto mt-10" >
        <p className="text-gray-400 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nihil
          aliquid totam pro ipsum dolor sit amet consectetur adipisicing elit.
          Vel nihil aliquid totam provident ipsum dvident, quasi dicta. Itaque
          assumenda explicabo magni, inventore ipsa
        </p>
      </div>
      </div>
    </>
  );
}

export default Experience;
