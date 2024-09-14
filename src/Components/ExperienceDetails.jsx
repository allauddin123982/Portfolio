import teresol from ".././Images/teresol.jpeg";
import samsoft from ".././Images/samsoft.jpeg";
function ExperienceDetails() {
  return (
    <>
      <div className="max-w-[1080px] mx-auto mt-5  text-white p-6">
        <div className="w-[350px] ">
          <ul className="flex flex-col gap-y-10 ">
            <li className="flex items-center gap-x-8">
              <div className="w-20 h-20 rounded-full">
                <img src={teresol} alt="" className="rounded-full"/>
              </div>
              <div >
                <h1 className="text-lg font-semibold">TereSol pvt ltd</h1>
                <p className="text-md tracking-wider pt-1">
                  Software Design Engineer <span className="text-green-500 "> (current)</span>
                </p>
              </div>
            </li>

            <li className="flex items-center gap-x-8">
              <div className="w-20 h-20 rounded-full">
                <img src={samsoft} alt="" className="rounded-full"/>
              </div>
              <div >
                <h1 className="text-lg font-semibold">SAMSOFT Technologies</h1>
                <p className="text-md tracking-wider pt-1">
                  React JS developer
                </p>
              </div>
            </li>
          </ul>
        </div>

       
      </div>
    </>
  );
}

export default ExperienceDetails;
