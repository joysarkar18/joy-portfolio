import React from 'react'
import html from "../Assets/Images/html.png"
import js from "../Assets/Images/js.png"
import css from "../Assets/Images/css.png"
import flutter from "../Assets/Images/flutter-logo_drzj7u.png"
import react from "../Assets/Images/react.png"
import firebase from "../Assets/Images/firebase.png"
import dart from "../Assets/Images/dart.png"
import node from "../Assets/Images/node.png"
import mongodb from "../Assets/Images/mongodb.png"
import java from "../Assets/Images/java.png"
import cpp from "../Assets/Images/cpp.png"
import python from "../Assets/Images/python.png"

const Experience = () => {
  return (
    <div
    name="experience"
    className="w-full min-h-screen bg-gradient-to-b  from-black to-gray-800 py-5  text-white flex flex-col  justify-center sm:pl-0 md:pl-24 "
  >
    <div className="max-w-screen-xl ">
      <div className="">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-5">
          Exprience
        </p>
      </div>
      <div className="w-full">
        <p className="text-xl ml-5 py-3 pb-4">
          Technologies I've Worked in
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 px-5 sm:px-5 text-center">
       
          <div className='shadow-md shadow-orange-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={html} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={css} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>CSS</p>
          </div>


          <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={js} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>JAVA-SCRIPT</p>
          </div>


          <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={flutter} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>FLUTTER</p>
          </div>

          <div className='shadow-md shadow-green-400 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={node} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>NODE-JS</p>
          </div>

          <div className='shadow-md shadow-blue-400 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={react} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>REACT</p>
          </div>

         
          <div className='shadow-md shadow-green-300 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={dart} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>DART</p>
          </div>

          <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={firebase} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>FIREBASE</p>
          </div>

          <div className='shadow-md shadow-green-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={mongodb} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>MONGODB</p>
          </div>

         

          <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={java} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>JAVA</p>
          </div>

          <div className='shadow-md shadow-blue-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={cpp} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>C++</p>
          </div>

          <div className='shadow-md shadow-yellow-500 hover:scale-105 duration-500 py-2 rounded-lg'>
            <img src={python} alt='html' className='w-20 mx-auto'></img>
            <p className='mt-4'>PYTHON</p>
          </div>
          

       
      </div>
    </div>
  </div>
  )
}

export default Experience