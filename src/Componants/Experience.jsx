import React from "react";
import html from "../Assets/Images/html.png";

const Experience = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b  from-black to-gray-800 py-5  text-white flex flex-col items-center justify-center "
    >
      <div className="max-w-screen-xl ">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-5">
            Experience
          </p>
        </div>
        <div className="w-full">
          <p className="text-xl ml-5 py-3">
            These are Technologies I have worked in
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-5 text-center">
          <div className="shadow-md shadow-emerald-300 hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={html} className="w-20 mx-auto"></img>
            <p className="mt-2">HTML</p>
          </div>

          <div className="shadow-md shadow-emerald-300 hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={html} className="w-20 mx-auto"></img>
            <p className="mt-2">HTML</p>
          </div>


          <div className="shadow-md shadow-emerald-300 hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={html} className="w-20 mx-auto"></img>
            <p className="mt-2">HTML</p>
          </div>


          <div className="shadow-md shadow-emerald-300 hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={html} className="w-20 mx-auto"></img>
            <p className="mt-2">HTML</p>
          </div>

           <div className="shadow-md shadow-emerald-300 hover:scale-105 duration-500 py-2 rounded-lg">
            <img src={html} className="w-20 mx-auto"></img>
            <p className="mt-2">HTML</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
