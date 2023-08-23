import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import { AiOutlineMail } from "react-icons/ai";
import  {BsTelephonePlus} from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    emailjs.sendForm('service_g66vtkr', 'template_xf0dich', form.current, 'WA5AhIw5NxGepG6xW')
      .then((result) => {
        setLoading(false)
        
toast.success("Email send successfully!",{toastId:"id for 1 time display"});
          console.log(result.text);
      }, (error) => {
        setLoading(false)
          console.log(error.text);
      });
  }; 
  


  return (
    <>
    <ToastContainer />
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
          
            <form ref={form} onSubmit={sendEmail} className="  bg-[#08080a] shadow-md rounded px-8 py-6 mb-4">
              <div className="mb-4">
                <label className="block text-white text-xl" htmlFor="Name">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-[#08080a] border border-green-500 w-full mt-2 rounded-md" name="user_name"
                />
                <label
                  className="block text-white mt-6 text-xl"
                  htmlFor="Name"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="bg-[#08080a] border border-green-500 w-full mt-2 rounded-md" name="user_email"
                />

                <label
                  className="block text-white mt-6 text-xl"
                  htmlFor="Name"
                >
                  Message
                </label>
                <input
                  className="bg-[#08080a] border border-green-500 w-full h-[200px] rounded-md mt-2 text-sm"
                  name="message"
                />
                <button onClick={sendEmail} className="bg-green-500 w-[100px] hover:bg-green-400 transition-all rounded-md text-white mt-4 p-2 text-xl">
               
                 {loading ?  <div role="status">
                  <span className="flex justify-center p-2">

                <svg aria-hidden="true" class="w-[20px] h-[20px] flex justify-center text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                  </span>
    {/* <span class="sr-only">Loading...</span> */}
</div> :  'send'} 
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
