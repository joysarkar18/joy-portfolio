import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const NavBar = (props) => {
  
  const links = [
    { id: 1, link: "home" },

    { id: 2, link: "about" },
    { id: 4, link: "experience" },

    { id: 3, link: "projects" },

 

    { id: 5, link: "contact" },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="flex text-xs">
      <h1 className="text-3xl mx-3 font-mark">Joy Sarkar</h1>
      
      </div>
     
      <ul className="hidden md:flex">
        {links.map((link) => {
          return (
            <i
              key={link.id}
              className="px-4 cursor-pointer font-medium capitalize
       text-gray-400 hover:scale-110 duration-200"
            >
              <Link to={link.link} smooth duration={500}>{link.link}</Link>
            </i>
          );
        })}
      </ul>
      <div
        onClick={() => {
          props.setNav(!props.nav);
        }}
        className="cursor-pointer text-gray-600 z-10 md:hidden"
      >
        {props.nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>

      {props.nav && 
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 z-9">
      {links.map((link) => {
          return (
            <i
              key={link.id}
              className="px-4 cursor-pointer font-bold capitalize
       text-gray-600 hover:scale-110 duration-200 pt-10 z-10" 
            >
              <Link onClick={()=>{
                props.setNav(!props.nav)
              }} to={link.link} smooth duration={500}>{link.link}</Link>
            </i>
          );
        })}
      </ul>}
    </div>
  );
};

export default NavBar;
