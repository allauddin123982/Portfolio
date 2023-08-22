import React from 'react'

function GoogleDetails() {
  return (
    <>
     <div className="text-white ">
        <div className="flex text-2xl ">
          <h1 className="">FullStack Developer  </h1>
          <p className="text-green-400 ps-10">@Google</p>
          
        </div>
        <p className="text-gray-400">From 17 July to 15th September 2022</p>
        <ul className="ps-4 pt-5 list-disc flex flex-col gap-y-8">
          <li>Front-end</li>
          <li>Back-end </li>
          <li>Graphics</li>
        </ul>
      </div>
    </>
  )
}

export default GoogleDetails