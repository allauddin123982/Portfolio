import React from "react";

function HeaderTabs(props) {
  return (
    <>
      <div className="hover:bg-green-400 hover:text-black transition-all rounded p-2">
        <div className="flex items-center">
      
          <ul className="">
            <li>{props.tabName}</li>
          </ul>
      
          {/* mobile responsive menu */}

          <ul className="py-1">
            <li>{props.tabName2}</li>
          </ul>
        </div>
        </div>
      
    </>
  );
}

export default HeaderTabs;
