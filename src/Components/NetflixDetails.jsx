import React from 'react'

function NetflixDetails() {
  return (
    <>
     <div className="text-white ">
        <div className="flex text-2xl ">
          <h1 className="">Backend Developer </h1>
          <p className="text-green-400 ps-10">@Netflix</p>
          
        </div>
        <p className="text-gray-400">From 27 November to 01 Febraury 2023 </p>
        <ul className="ps-8 pt-5 list-disc flex flex-col gap-y-8">
          <li>Node</li>
          <li>Python</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </>
  )
}

export default NetflixDetails