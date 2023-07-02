import React from 'react'
import joy from "../Assets/joy_portfolio.png"

const Home = () => {
  return (
    <div name="home" className=' w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div>
                <h1 className='text-white text-4xl sm:text-7xl font-bold max-w-45'>I'm a Software Developer</h1>
                <p className='text-gray-300 py-5 max-w-md'>I have one year of experience building and designing
                   software.
                   Currently, I love to work on web applications use
                   technologies like
                   React, Tailwind, Flutter, Firebase and MongoDb.
                </p>
            </div>
            <div className='w-80 h-80'>
                <img src={joy} alt='joy img'/>
            </div>
        </div>
    </div>
  )
}

export default Home