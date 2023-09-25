import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import ProjectCards from "./Components/ProjectCards";
import Technologies from "./Components/Technologies";
// import Testimonials from './Components/Testimonials';
import Contact from "./Components/Contact";
import About from "./Components/About";
import { useContext } from "react";
import { CursorContext } from "./context/CursorContext";
import { motion } from "framer-motion";
function App() {
  const { cursorVariants, cursorBG } = useContext(CursorContext);
  console.log(useContext(CursorContext));
  return (
    <>
      <Header />
      <Banner />
      <About />
      <ProjectCards />
      <Technologies />
      <Contact />
      {/* <Testimonials/> */}

      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[16px] h-[16px] bg-black fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </>
  );
}

export default App;
