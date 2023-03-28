import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
      
      
        <p className="text-xl mt-20" >
        Hello!! I'm Saransh Sharma and Currently I am a student of 2nd year NIT Raipur, Electronics and communication engineering branch.I have interest in web developement and competetive programming .Currently I love to work on web applications using React, Bootstrap, Tailwind etc.</p>
        <br />
        <p className="text-xl">
          I am also in Competetive programming and have 2 stars on codechef and 1130 rating on codeforces.I love to solve problems.
        </p>
      </div>
    </div>
  );
};

export default About;
