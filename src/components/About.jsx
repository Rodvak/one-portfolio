import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="font-signature text-xl mt-5">
          Hello world! My name is Alejandro but you can call me Alex. I hold a
          Bachelors of International Commerce and Business from EBC Mexico City
          and have 6+ years of sales, project management and customer service
          experience in the technology field. During the pandemic I've come to
          realize that life is very short and that we should live every day to
          the fullest. It was the moment I decided to reconect with my passion
          for coding and pursue it as a lifelong career path. I am a proud
          graduate of Coding Dojo's 2022 Software engineering program, where I
          was able to dive into 2000+ programming hours where I was able to
          connect and collaborate with an amazing group of people who also share
          this passion with me.
          <br /> <br />
          <p className="text-xl">
            I have experience building and designing Full Stack applications
            using JavaScript, Java and Python. When not coding, I love to be
            outdoors; Going to the beach, hiking, playing sports. My favorite
            hobbies are travelling, learning other languages (I'm now fluent in
            Portuguese!!) and trying new food. My goal to future is to leverage
            my experience in programming and to inspire the younger
            Latin-american community to join Tech.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
