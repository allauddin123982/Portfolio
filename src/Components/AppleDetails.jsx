import React from 'react'

function AppleDetails() {
  return (
    <>
     <div className="text-white ">
        <div className="flex text-2xl ">
          <h1 className="">CEO </h1>
          <p className="text-green-400 ps-10">@Apple</p>
          
        </div>
        <p className="text-gray-400">From 20 August to 31 December 2021 </p>
        <ul className="ps-10 pt-5 list-disc">
          <li className="pt-4">Frontend developer</li>
          <li className="pt-4">React</li>
          <li className="pt-4">Next</li>
        </ul>
      </div>
    </>
  )
}

export default AppleDetails