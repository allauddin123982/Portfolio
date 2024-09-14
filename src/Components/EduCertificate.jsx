import React from "react";
import cust from "../Images/download.jpg";
import conc from "../Images/concordia.png";
import pearl from "../Images/pearl.jpg";
const EduCertificate = () => {
  return (
    <div className="m-5">
      <p className="mt-10 flex gap-x-4 items-center">
        <img src={cust} alt="" className="rounded-full w-16" />
        <p>
          <h1 className="text-white text-2xl ">BS in Computer Science</h1>
          <p className="text-gray-500 text-xl">2020 - 2024</p>
        </p>
      </p>

      <p className="mt-10 flex gap-x-4 items-center">
        <img src={conc} alt="" className="rounded-full w-16" />
        <p>
          <h1 className="text-white text-2xl">
            Intermediate in Computer Science
          </h1>
          <p className="text-gray-500 text-xl">2018 - 2020</p>
        </p>
      </p>

      <p className="mt-10 flex gap-x-4 ">
        <p className="">
          <img src={pearl} alt="" className="rounded-full w-16" />
        </p>
        <ul className=" text-gray-500 ps-4 text-xl">
          <h1 className="text-white text-2xl ">Certification</h1>
          <li className="list-disc ms-4 ">HTML</li>
          <li className="list-disc ms-4">CSS </li>
          <li className="list-disc ms-4">Javascript</li>
          <li className="list-disc ms-4">React JS</li>
        </ul>
      </p>
    </div>
  );
};

export default EduCertificate;
