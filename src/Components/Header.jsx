import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import HeaderTabs from "./HeaderTabs";
import Tabs from '../Tabs.json'
const Header = () => {
   const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className=" m-5 text-white p-5 ">
        <div className="max-w-[1640px] mx-auto flex justify-between  items-center ">
          <div className="text-3xl font-bold font-serif"><h1>Porfolio</h1></div>
      

        {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="font-bold text-xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="font-bold text-xl md:hidden block"
            />
          )}


        <div className="text-[18px] hidden md:block">
          <ul className="hidden md:flex gap-20 hover:cursor-pointer ">
            <li className="flex gap-12  ">
              {
                Tabs.map((element) => {
                  return(
                    <HeaderTabs tabName={element.title1}/>
                  )
                })
              }
            </li>
          
          </ul>
          </div>

           {/* mobile responsive menu */}
          
          <ul className={`md:hidden fixed  top-[100px]  w-full p-5 bg-[#21242a] text-white  hover:cursor-pointer
                ${toggle ? "left-[0%]" : "left-[-100%]"}
            `}>
            <li className="rounded">
              {
                Tabs.map((element) => {
                  return(
                    <HeaderTabs tabName2={element.title1}/>
                  )
                })
              }
            </li>
          </ul>
      </div>
      </div>














      {/* <div className="m-5 text-white p-5 ">
        <div className="max-w-[1640px] mx-auto flex justify-between items-center ">
          <div className="text-3xl font-bold">Porfolio</div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="font-bold text-xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="font-bold text-xl md:hidden block"
            />
          )}
          <div className="text-xl hidden md:block">
            <ul className="hidden md:flex gap-20 hover:cursor-pointer ">
              <li className="hover:bg-green-400 hover:text-black transition-all rounded p-2 ">Home</li>
              <li className="hover:border border-white rounded p-2 ">
                Projects
              </li>
              <li className="hover:border border-white rounded p-2 ">Skills</li>
              <li className="hover:border border-white rounded p-2 ">
                Technologies
              </li>
              <li className="hover:border border-white rounded p-2 ">
                Contact
              </li>
            </ul>
          </div>
          {/* mobile responsive menu */}
      {/* <ul
            className={`md:hidden fixed  top-[86px] w-full p-5 bg-[#21242a] text-white gap-10 hover:cursor-pointer
                ${toggle ? "left-[0%]" : "left-[-100%]"}
            `}
          >
            <li className="hover:border border-gray-100 rounded p-2 ">Home</li>
            <li className="hover:border border-gray-100 rounded p-2 ">
              Projects
            </li>
            <li className="hover:border border-gray-100 rounded p-2 ">
              Skills
            </li>
            <li className="hover:border border-gray-100 rounded p-2 ">
              Technologies
            </li>
            <li className="hover:border border-gray-100 rounded p-2 ">
              Contact
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Header;
