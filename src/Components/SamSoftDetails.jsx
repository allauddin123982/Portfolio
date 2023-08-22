import React from "react";

function SamSoftDetails() {
  return (
    <>
      <div className=" text-white">
        <div className="flex gap-5 text-2xl ">
          <h1 className="">Intern </h1>
          <p className="text-green-400">@SAMSOFTDEV</p>
          
        </div>
        <p className="text-gray-400">From 17 July to 15th September 2023 </p>
        <ul className="ps-4 pt-5 list-disc flex flex-col gap-y-8">
          <li >Frontend developer</li>
          <li >React</li>
          <li >Next</li>
        </ul>
      </div>
    </>
  );
}

export default SamSoftDetails;
