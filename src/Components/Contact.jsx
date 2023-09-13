import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_g66vtkr",
        "template_xf0dich",
        form.current,
        "WA5AhIw5NxGepG6xW"
      )
      .then(
        (result) => {
          setLoading(false);

          toast.success("Email send successfully!", {
            toastId: "id for 1 time display",
          });
          console.log(result.text);
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <div className=" mt-12">
        <div className="absolute left-0 mt-[-160px] w-40 md:w-60  ">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            id="blobSvg"
          >
            <path
              id="blob"
              // d="M437,319.5Q441,389,381,429Q321,469,252,462Q183,455,141.5,407Q100,359,50,304.5Q0,250,53.5,198Q107,146,150,110.5Q193,75,259.5,45Q326,15,368,74.5Q410,134,421.5,192Q433,250,437,319.5Z"
              fill="#5eeb60"
            >
              <animate
                attributeName="d"
                dur="10000ms"
                repeatCount="indefinite"
                values="M437,319.5Q441,389,381,429Q321,469,252,462Q183,455,141.5,407Q100,359,50,304.5Q0,250,53.5,198Q107,146,150,110.5Q193,75,259.5,45Q326,15,368,74.5Q410,134,421.5,192Q433,250,437,319.5Z;

                M424.5,307.5Q409,365,361,403.5Q313,442,244,461Q175,480,117.5,434Q60,388,36,319Q12,250,30,176.5Q48,103,113,66.5Q178,30,249,33Q320,36,358,90Q396,144,418,197Q440,250,424.5,307.5Z;
                
                M381,284.5Q290,319,209.5,389.5Q129,460,81,355Q33,250,92,164.5Q151,79,245,87Q339,95,405.5,172.5Q472,250,381,284.5Z;
                
                M408,306.5Q316,363,224,408.5Q132,454,101.5,352Q71,250,118.5,177.5Q166,105,234,132.5Q302,160,401,205Q500,250,408,306.5Z;

                M388,289Q295,328,251,326.5Q207,325,112.5,287.5Q18,250,93.5,179.5Q169,109,247.5,113.5Q326,118,403.5,184Q481,250,388,289Z;
                
                M360,307Q316,364,255.5,354Q195,344,165,297Q135,250,131,143.5Q127,37,249,39Q371,41,387.5,145.5Q404,250,360,307Z;

                M393,337.5Q351,425,278,376Q205,327,172,288.5Q139,250,138,152.5Q137,55,222,103.5Q307,152,371,201Q435,250,393,337.5Z;

                M437,319.5Q441,389,381,429Q321,469,252,462Q183,455,141.5,407Q100,359,50,304.5Q0,250,53.5,198Q107,146,150,110.5Q193,75,259.5,45Q326,15,368,74.5Q410,134,421.5,192Q433,250,437,319.5Z

                "
              ></animate>
            </path>
          </svg>
        </div>
        <div
          id="contact-sec"
          className=" max-w-[1500px] mx-auto md:grid grid-cols-2 gap-22 pt-10"
        >
          <div className=" col-span-1 text-white p-10 md:p-20 text-justify">
            <h1 className="text-3xl md:text-5xl  tracking-widest font-serif">
              Hire me
            </h1>
            <p className="text-gray-300 text-xl pt-5">
              I am available for full time, part time and freelance work.
              Connect with me via email
            </p>

            <figure className="">
              <p>
                {" "}
                <AiOutlineMail className="mt-10 text-3xl" />
              </p>
              <figcaption className="text-xl">
                khanallauddin113@gmail.com
              </figcaption>
            </figure>
          </div>

          <div className=" col-span-1 text-white text-xl md:text-4xl p-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" shadow-md rounded px-8 py-6"
            >
              <div className="">
                <label className="block text-white text-xl" htmlFor="Name">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-[#050506] border-b border-green-500 w-full  rounded-md"
                  name="user_name"
                />
                <label className="block text-white mt-6 text-xl" htmlFor="Name">
                  Email
                </label>
                <input
                  type="text"
                  className="bg-[#050506] border-b border-green-500 w-full  rounded-md"
                  name="user_email"
                />

                <label className="block text-white mt-6 text-xl" htmlFor="Name">
                  Message
                </label>
                <input
                  className="bg-[#050506] border-b border-green-500 w-full rounded-lg text-sm"
                  name="message"
                />
                <button
                  onClick={sendEmail}
                  className="border border-green-500 w-[100px] hover:bg-green-400 hover:text-black transition-all rounded-md text-white mt-12 p-2 text-xl"
                >
                  {loading ? (
                    <div role="status">
                      <span className="flex justify-center p-2">
                        <svg
                          aria-hidden="true"
                          class="w-[20px] h-[20px] flex justify-center text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </span>
                      {/* <span class="sr-only">Loading...</span> */}
                    </div>
                  ) : (
                    "send"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p className="mt-10 h-[70px] text-center flex justify-center items-center text-white text-xl">
        This profile is made using React and Tailwind css by Allauddin khan
      </p>
    </>
  );
}

export default Contact;
