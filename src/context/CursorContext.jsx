import React, { createContext, useEffect, useState } from "react";

export const CursorContext = createContext();
const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,   
  });

//cursore bg state
const [cursorBG, setCursorBG] = useState('default')


  useEffect(() => {
    const move = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mouseleave", move);
    };
  });
  console.log(cursorPos);

  const cursorVariants = {
    // default: {
    //   x: cursorPos.x - 10,
    //   y: cursorPos.y - 10,
    //   backgroundColor: "#D3D3D3",
    // },
    text:{
        width:'150px',
        height:'150px',
        x: cursorPos.x - 72,
        y: cursorPos.y - 72,
        backgroundColor: "#fff",
        mixBlendMode:'difference',

    }
  };
// mouse enter handle 
const mouseEnterHandler = () => {
    setCursorBG('text');
    
}
// mouse leave handle 
const mouseLeaveHandler = () => {
    setCursorBG('default');

}
  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
