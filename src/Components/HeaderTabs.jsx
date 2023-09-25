import React from "react";

function HeaderTabs(props) {
  const {tabData} = props
  return (
    <>
      <div className="rounded p-2">
        <div className="flex items-center">
      
          <ul className="hidden md:block">
            <a href={tabData?.href}>{tabData.title}</a>
          </ul>
      
          {/* mobile responsive menu */}

          <ul className="md:hidden py-1">
            <a href={tabData?.href}>{tabData.title}</a>
          </ul>
        </div>
        </div>
      
    </>
  );
}

export default HeaderTabs;
