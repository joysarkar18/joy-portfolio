import React from "react";
import pregamate from "../Assets/Images/pregamate.png"
import expense from "../Assets/Images/expense.png"
import wall from "../Assets/Images/wall.png"
import {BsGooglePlay , BsGithub} from "react-icons/bs"
import {FaGoogleDrive} from "react-icons/fa"
const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-gradient-to-b  from-gray-800 to-black py-5  text-white flex flex-col items-center justify-center "
    >
      <div className="max-w-screen-xl ">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-5">
            Projects
          </p>
        </div>
        <div className="w-full">
          <p className="text-xl ml-5 py-3">
            Checkout some of my work right here
          </p>
        </div>
        <div className="  grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-5">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="rounded-lg hover:scale-105" src={pregamate} alt="pregamate app"></img>
            <div className="flex items-center justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.pregamate.mobile_application" target="_blank" rel="noreferrer">
              <div className="flex  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-700 cursor-pointer">
                <div className="pt-1">
                <BsGooglePlay ></BsGooglePlay>
                </div>
                
                <div>
                  <p className="ml-2">PlayStore</p></div> 
               
              </div>
              </a>
              
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="rounded-lg hover:scale-105" src={expense} alt="Expence Tracker app"></img>
            <div className="flex items-center justify-center">
            
            

              <a href="https://drive.google.com/file/d/1MBMwo-fpKtOv9rq0G8QSZJL3Uswm2pJ6/view?usp=sharing" target="_blank" rel="noreferrer">
              <div className="flex  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-700 cursor-pointer">
                <div className="pt-1">
                <FaGoogleDrive></FaGoogleDrive>
                </div>
                
                <div>
                  <p className="ml-2">Demo</p></div> 
               
              </div>
              </a>
              

              <a href="https://github.com/joysarkar18/Expense-Tracker-app" target="_blank" rel="noreferrer">
              <div className="flex  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-700 cursor-pointer">
                <div className="pt-1">
                <BsGithub></BsGithub>
                </div>
                
                <div>
                  <p className="ml-2">Code</p></div> 
               
              </div>
              </a>

           
             
            </div>
          </div>


          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="rounded-lg hover:scale-105" src={wall} alt="Wallpaper app"></img>
            <div className="flex items-center justify-center">
           <a href="https://drive.google.com/file/d/1NnZgTGFsWTxGFWyQXqFQo3S9TFw0oul2/view" target="_blank" rel="noreferrer">
           <div className="flex  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-700 cursor-pointer">
                <div className="pt-1">
                <FaGoogleDrive></FaGoogleDrive>
                </div>
                
                <div>
                  <p className="ml-2">Demo</p></div> 
               
              </div>
           </a>
              

              <a href="https://github.com/joysarkar18/wallpaper-app-" target="_blank" rel="noreferrer">
              <div className="flex  w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-700 cursor-pointer">
                <div className="pt-1">
                <BsGithub></BsGithub>
                </div>
                
                <div>
                  <p className="ml-2">Code</p></div> 
               
              </div>
              </a>

           
            </div>
          </div>




         
        </div>
      </div>
    </div>
  );
};

export default Projects;
