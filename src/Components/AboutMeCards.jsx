import React from "react";

function AboutMeCards(props) {
  return (
    <>
      <div className="col-span-1 w-[320px] md:w-[350px] p-10 ">
        <div className="border border-green-400 rounded-lg p-10">
          <p className="">{props.icon}</p>
          <h2 className="text-3xl text-green-400 font-bold tracking-widest">
            {props.title}
          </h2>
          <p className=" text-white ">{props.exptime}</p>
        </div>
      </div>
    </>
  );
}

export default AboutMeCards;
