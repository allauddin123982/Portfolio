import React from "react";

const TestinomialsCard = (props) => {
  return (
    <>
      <div className="md:w-[500px] p-10 ">
        <div className="border border-green-400 rounded-lg p-5">
          <h2 className="text-3xl text-green-400 font-bold tracking-widest">
            {props.title}
          </h2>
          <p className=" pt-10 text-white text-justify">{props.desc}</p>

          <div className=" pt-20  flex items-center gap-2 ">
            <div>
              <img
                src={props.imgg}
                alt="uebfuesbf"
                className="w-[80px] rounded-full"
              />
            </div>
            <div>
              <i className="text-white">{props.name}</i>
              <p className="text-gray-400">{props.nameDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestinomialsCard;
