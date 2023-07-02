import React , {useState} from "react"
import Home from "./Componants/Home";
import { NavBar } from "./Componants/NavBar";

function App() {
  const [nav, setNav] = useState(false);
  return (
   <div>
    <NavBar nav={nav} setNav= {setNav}></NavBar>
    <Home nav={nav}></Home>
   </div>
  );
}

export default App;
