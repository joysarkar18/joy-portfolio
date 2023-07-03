import Lottie from 'lottie-react'
import {AiOutlineArrowRight} from "react-icons/ai"
import {BsLinkedin , BsGithub , BsTwitter , BsInstagram} from "react-icons/bs"
import homeLogo from "../Assets/Lottie/97639-coding.json"
import { Link } from "react-scroll";

const Home = (props) => {
  return (
    <div name="home" className=' w-full min-h-screen flex justify-center items-center bg-gradient-to-b from-black via-black to-gray-800 pt-24'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div >
                <h1 className='text-white text-4xl sm:text-7xl font-bold max-w-45'>I'm a Software Developer</h1>
                <p className='text-gray-300 py-5 max-w-md'>I have one year of experience building and designing
                   Mobile Application.
                   Currently, I love to work on web applications use
                   technologies like
                   React, Tailwind, Flutter, Firebase and MongoDb.
                </p>
                <div className='mb-10 flex '>
                  <button className='text-white w-fit px-5 py-3 cursor-pointer my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-300'> <Link to='projects' smooth duration={500} className='mr-2'>Projects</Link>  
                    <span>
                      <AiOutlineArrowRight></AiOutlineArrowRight>
                    </span>
                  </button>
                  <button className='ml-8 hover:scale-125 duration-300'>
                    <a href='https://www.linkedin.com/in/joy-sarkar-667b47218/' target='_blank' rel="noreferrer">
                    <span>
                      <BsLinkedin color='blue' size={20}/>
                    </span>
                    </a>
                    
                  </button>
                  <button className='ml-8 hover:scale-125 duration-300'>
                    <a href='https://github.com/joysarkar18'  target="_blank" rel="noreferrer">
                    <span >
                      <BsGithub color='grey' size={20}/>
                    </span>
                    </a>
                    
                  </button>
                  <button className='ml-8 hover:scale-125 duration-300'>
                    <a target='_blank' rel="noreferrer" href='https://twitter.com/JoySark91001769'>
                    <span >
                      <BsTwitter color='blue' size={23}/>
                    </span>
                    </a>
                    
                  </button>
                  <button className='ml-8 hover:scale-125 duration-300'>
                    <a href='https://www.instagram.com/joy_stan_/' target='_blank' rel="noreferrer">
                    <span >
                      <BsInstagram color='red' size={20}/>
                    </span>
                    </a>
                    
                  </button>
                </div>
            </div>
            {!props.nav && <div >
                <Lottie animationData={homeLogo}/>
            </div>}
        </div>
    </div>
  )
}

export default Home