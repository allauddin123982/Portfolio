import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import  {BsTelephonePlus} from 'react-icons/bs';
function Contact() {
  return (
    <>
      <div id="contact-sec" className="max-w-[1500px] mx-auto md:grid grid-cols-2 gap-22 mt-20">
        <div className=" col-span-1 text-white p-10 md:p-20 text-justify">
          <h1 className="text-3xl md:text-5xl  tracking-widest">
            Get in touch
          </h1>
          <p className="text-gray-300 text-xl pt-5">
            Drop me line, give me a call or send me a message by submitting the
            form.
          </p>

          <figure className="">
               <p> <AiOutlineMail className="mt-10 text-3xl" /></p>
            <figcaption className="text-xl">
            hello@bravecoders.com
            </figcaption>
          </figure>
          <figure className="">
               <p> <BsTelephonePlus className="mt-10 text-2xl text-white" /></p>
            <figcaption className="text-xl ">
            +922354654679
            </figcaption>
          </figure>
        </div>

        <div className=" col-span-1 text-white text-xl md:text-4xl p-5">
          
            <form className="bg-[#08080a] shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-white text-2xl" htmlFor="Name">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-[#08080a] border border-green-500 w-full mt-2"
                />
                <label
                  className="block text-white mt-10 text-2xl"
                  htmlFor="Name"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="bg-[#08080a] border border-green-500 w-full mt-2"
                />

                <label
                  className="block text-white mt-10 text-2xl"
                  htmlFor="Name"
                >
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols="65"
                  rows="5"
                  className="bg-[#08080a] border border-green-500 w-full mt-2"
                ></textarea>
                <button className="bg-green-500 w-[100px] text-white p-2 text-xl">
                  Send
                </button>
              </div>
            </form>
          
        </div>
      </div>

      <p className="mt-10 bg-green-500 h-[70px] text-center flex justify-center items-center text-white text-xl">
        ©2020 Acme Corp. All rights reserved.
      </p>
    </>
  );
}

export default Contact;
