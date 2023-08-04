import React from "react";

const ProjCard = (props) => {
  return (
    <>
      <div className="col-span-1 md: md:w-[500px] p-10 ">
       
          <div className="border border-green-400 rounded-lg">
            
            <img src={props.img} alt="" className=" h-[300px] rounded-t-lg" />
            <div className="px-8 py-5">
            <p className=" text-white text-justify">
              <h2 className="text-2xl font-bold tracking-widest">{props.title} </h2>
              {props.desc}
            </p>
            
            <div className="p-2 flex mt-6 gap-5 ">
              <buttons className="bg-green-500 p-2 font-bold rounded text-center w-[200px]">
                Node
              </buttons>
              <buttons className="bg-purple-500 p-2 font-bold rounded text-center w-[200px]">
                Next
              </buttons>
              <buttons className="bg-blue-500 p-2 font-bold rounded text-center w-[200px]">
                React
              </buttons>
              <buttons className="bg-orange-500 p-2 font-bold rounded text-center w-[200px]">
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
