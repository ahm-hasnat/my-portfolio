import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 min-h-screen text-center md:text-left mt-24 px-6 md:px-16">
      {/* Left Section */}
      <div className="text-start space-y-5 max-w-xl">
        <h3 className="text-lg font-medium text-[#4D4D4D] mb-3">HELLO, I'M</h3>
        <h1 className="text-4xl sm:text-5xl font-bold mb-5">Md. Hasnat</h1>

        <h2 className="text-xl sm:text-2xl text-[#4D4D4D] font-semibold flex justify-center md:justify-start flex-wrap">
          I AM A{" "}
          <span className="inline-block overflow-hidden ml-2 min-w-[200px] sm:min-w-[260px] text-[#FF6B00] text-left">
            <Typewriter
              words={["Frontend Developer", "MERN Stack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="secondary text-sm sm:text-base leading-relaxed">
          I am a passionate web developer from Bangladesh specializing in React,
          Javascript, Node.js, and the MERN stack. I love building responsive
          and user-friendly web applications. I'm always ready to learn and
          explore new technologies.
        </p>

        <button className="btn flex items-center gap-2 text-white bg-[#FF6B00] hover:bg-black hover:text-[#FF6B00] px-5 py-2 rounded-lg transition">
          <LuDownload /> Download Resume
        </button>

        <div className="mt-6">
          <h3 className="primary font-semibold text-md">CONNECT WITH ME</h3>
          <div className="flex items-center justify-center md:justify-start gap-6 mt-3">
            <a
              href="https://www.facebook.com/m.hasnat.0.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125"
            >
              <FaFacebook size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/m-hasnat-94b3ab38b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-blue-600 transition-transform transform hover:scale-125"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://github.com/ahm-hasnat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-transform transform hover:scale-125"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center md:justify-end">
        <img
          className="w-52 sm:w-64 md:w-80  rounded-full object-cover"
          src="https://i.ibb.co/LDcvSgyq/picture.png"
          alt="Md. Hasnat"
        />
      </div>
    </div>
  );
};

export default Banner;
