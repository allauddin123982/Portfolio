import React from "react";

function AboutMeCards(props) {
  return (
    <>
        <div className="border border-green-400 rounded-lg flex flex-col items-center p-5 w-[250px]  hover:bg-gradient-to-b from-green-600 to-green-700 transition-all hover:text-white">
          <p className="text-center">{props.icon}</p>
          <h2 className="text-2xl md:text-3xl text-green-400 font-bold tracking-widest ">
            {props.title}
          </h2>
          <p className=" text-white ">{props.exptime}</p>
        </div>
      
    </>
  );
}

export default AboutMeCards;
