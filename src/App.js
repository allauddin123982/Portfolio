import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import ProjectCards from './Components/ProjectCards';
import Technologies from './Components/Technologies';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import About from './Components/About';
import Experience from './Components/Experience';


function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Experience/>
    <ProjectCards/> 
    <Technologies/>
    <Testimonials/>
    <Contact/> 
    </>

    );
}

export default App;
