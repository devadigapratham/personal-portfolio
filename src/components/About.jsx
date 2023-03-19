import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8"><p className="pb-100">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About :
            </p>
          </p>
        </div>

        <p className="text-xl mt-2">
        Hey guys! I am Prathamesh Devadiga. I am 18 years old and a student at PES University. I love playing the guitar, coding, and, of course, drum roll eating! I am passionate about creating projects and learning new things, especially in the field of AI, and I hope to make a difference in the world. In my free time, you can find me either trying to chill or coding for hours straight (XD), but mainly, I would be available if there's any way I could be of help to anyone. I am always excited to see where life takes me and am always looking for new experiences and challenges.
        </p>

        <br />

        <p className="text-xl">
        I also have been working on a couple of machine learning projects, which I plan to upload here soon. Also, if there is anyway I can help you, please feel free to reach out to me. I would love to help you out. I am also open to any suggestions or feedback you might have for me. I am always looking to improve myself and would love to hear from you. Thank you for visiting my website and I hope you have a great day!  
        </p>
      </div>
    </div>
  );
};

export default About;