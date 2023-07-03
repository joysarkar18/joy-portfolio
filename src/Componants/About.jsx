import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full py-4 min-h-screen bg-gradient-to-b from-gray-800  to-black text-white flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-xl ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ml-5">
            About
          </p>
        </div>
        <p className="text-xl mt-10 px-5">
          My name is Joy Sarkar, currently persuing B.Tech in Computer Science
          And Engineering from Maulana Abul Kalam Azad University of Technology.
          I'm a passionate Android developer who's always looking to learn new
          technologies. I specialize in building high-quality Android
          applications with a focus on creating excellent user experiences. I
          have experience in Kotlin, Firebase, and ace Knowledge in Flutter
          framework.
        </p>
        <br />
        <p className="text-xl px-5">
          As a great learner, I enjoy staying up to date with the latest
          industry trends and technologies. Currently I'm exploring the Web
          technologies, like HTML, CSS, JS, React, Node-Js, TaildWind CSS and
          Next-Js. I love taking on new challenges and working collaboratively.
          In addition to my technical skills, I'm also a strong communicator and
          love to work with clients to ensure that their requirements are met
          and exceeded.
        </p>
        <br></br>
        <p className="text-xl px-5">
          In my free time, I enjoy attending tech meetups and conferences, where
          I get to network with fellow developers and learn about emerging
          trends in the industry. I'm excited to continue developing my skills
          and building amazing applications.
        </p>
      </div>
    </div>
  );
};

export default About;
