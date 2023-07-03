import React , {useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o4fykbp', 'template_m0cxxux', form.current, 'V2Hg3zbD-zPyJKbX-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div
    name="contact"
    className="w-full min-h-screen bg-gradient-to-b  from-black to-gray-800 py-5  text-white flex flex-col  justify-center sm:pl-0 md:pl-24 "
  >
    <div className="max-w-screen-xl ">
      <div className="">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-5">
          Contact
        </p>
      </div>
      <div className="w-full">
        <p className="text-xl ml-5 py-3 pb-4">
          Write me a message
        </p>
      </div>
     

      <div className=" flex justify-center items-center">
          <form
          ref={form}
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
            type="text" name="user_name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
            type="email" name="user_email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button onClick={sendEmail} className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>


    </div>
  </div>
  )

}

export default Contact