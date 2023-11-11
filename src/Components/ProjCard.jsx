import React from "react";

const ProjCard = (props) => {
  return (
    <>
      <div className="w-auto lg:w-[450px] pt-10 md:p-5 lg:p-10 ">
       

        <div className="border h-full border-green-400 rounded-lg bg-[#050506] ">
          <img
            src={props.img}
            alt=""
            className=" rounded-t-lg object-cover"
          />
          <div className="p-2">
            <p className=" text-white text-justify">
              <h2 className=" p-1 text-2xl font-bold tracking-widest">
                {props.title}
              </h2>
              <p className="desc p-1 text-gray-400 ">

              {props.desc}
              </p>
            </p>
 
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjCard;
