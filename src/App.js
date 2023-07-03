import React , {useState} from "react"
import Home from "./Componants/Home";
import { NavBar } from "./Componants/NavBar";
import About from "./Componants/About";
import Projects from "./Componants/Projects";
import Experience from "./Componants/Experience";

function App() {
  const [nav, setNav] = useState(false);
  return (
   <div>
    <NavBar nav={nav} setNav= {setNav}></NavBar>
    <Home nav={nav}></Home>
    <About></About>
    <Projects></Projects>
    {/* <Experience></Experience> */}
   </div>
  );
}

export default App;
