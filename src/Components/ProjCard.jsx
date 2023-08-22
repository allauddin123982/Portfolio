import React from "react";

const ProjCard = (props) => {
  return (
    <>
      <div className="md:w-[500px] p-10 object-cover">
       
          <div className="border border-green-400 rounded-lg ">
            
            <img src={props.img} alt="" className=" h-[300px] rounded-t-lg " />
            <div className=" p-2">
            <p className=" text-white text-justify">
              <h2 className="text-2xl font-bold tracking-widest">{props.title} </h2>
              {props.desc}
            </p>
            
            <div className="p-2 flex mt-6 gap-3 ">
              <buttons className="bg-gradient-to-r from-green-400 via-green-500 to-green-400 p-2 font-bold rounded text-center w-[200px]">
                Node
              </buttons>
              <buttons className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 p-2 font-bold rounded text-center w-[200px]">
                Next
              </buttons>
              <buttons className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-2 font-bold rounded text-center w-[200px]">
                React
              </buttons>
              <buttons className="bg-gradient-to-r from-pink-500 via-red-400 to-pink-600 p-2 font-bold rounded text-center w-[200px]">
                SCSS
              </buttons>
            </div>
          </div>
          </div>
        
      </div>
    </>
  );
};

export default ProjCard;
