import React from "react";

const About = () => {
  return (
    <div name= "about" className="w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white flex flex-col justify-center items-center"> 
      <div className="max-w-screen-xl ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-5">About</p>
        </div>
        <p className="text-xl mt-10 px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis cum
          aliquam fugiat, tempora magnam dolores quas placeat et quidem soluta
          explicabo perspiciatis libero sapiente praesentium quo id in quae
          pariatur ipsum earum optio consequuntur nobis esse. Odio iure
          aspernatur, aperiam veritatis ipsa temporibus rem corporis, quidem
          atque laborum minus nobis possimus cum.
        </p>
        <br />
        <p className="text-xl px-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error rem
          repudiandae iste ratione itaque illo eligendi debitis odit eveniet,
          fugiat earum obcaecati doloribus cum accusamus. Consequuntur cumque
          molestias totam magni voluptates in qui dolorem? Tempora eaque,
          suscipit blanditiis ipsum error ex quos doloremque.
        </p>
      </div>
    </div>
  );
};

export default About;
