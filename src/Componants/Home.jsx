import Lottie from 'lottie-react'
import {AiOutlineArrowRight} from "react-icons/ai"
import {BsLinkedin , BsGithub , BsFacebook , BsInstagram} from "react-icons/bs"
import homeLogo from "../Assets/Lottie/97639-coding.json"

const Home = () => {
  return (
    <div name="home" className=' w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div >
                <h1 className='text-white text-4xl sm:text-7xl font-bold max-w-45'>I'm a Software Developer</h1>
                <p className='text-gray-300 py-5 max-w-md'>I have one year of experience building and designing
                   software.
                   Currently, I love to work on web applications use
                   technologies like
                   React, Tailwind, Flutter, Firebase and MongoDb.
                </p>
                <div className='mb-10 flex '>
                  <button className='text-white w-fit px-5 py-3 cursor-pointer my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'> <p className='mr-2'>Projects </p>   
                    <span>
                      <AiOutlineArrowRight></AiOutlineArrowRight>
                    </span>
                  </button>
                  <button className='ml-8'>
                    <span>
                      <BsLinkedin color='blue' size={20}/>
                    </span>
                  </button>
                  <button className='ml-8'>
                    <span >
                      <BsGithub color='grey' size={20}/>
                    </span>
                  </button>
                  <button className='ml-8'>
                    <span >
                      <BsFacebook color='blue' size={23}/>
                    </span>
                  </button>
                  <button className='ml-8'>
                    <span >
                      <BsInstagram color='red' size={20}/>
                    </span>
                  </button>
                </div>
            </div>
            <div className='h-130 w-180'>
                <Lottie animationData={homeLogo}/>
            </div>
        </div>
    </div>
  )
}

export default Home