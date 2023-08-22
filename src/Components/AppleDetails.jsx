import React from 'react'

function AppleDetails() {
  return (
    <>
     <div className="text-white ">
        <div className="flex gap-5 text-2xl ">
          <h1 className="">CEO </h1>
          <p className="text-green-400 ">@Apple</p>
          
        </div>
        <p className="text-gray-400">From 20 August to 31 December 2021 </p>
        <ul className="ps-4 pt-3 list-disc  flex flex-col gap-y-8">
          <li>Frontend developer</li>
          <li>React</li>
          <li>Next</li>
        </ul>
      </div>
    </>
  )
}

export default AppleDetails