import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const sections = [
    {
      title: (
        <>
          <span className="text-[#FF6B00]">MERN</span> stack Developer
        </>
      ),
       content: (
        <>
          I am a dedicated and passionate MERN stack developer with a strong
          foundation in both <span className='text-[#FF6B00] font-semibold'> front-end  </span>
          and <span className='text-[#FF6B00] font-semibold'> back-end  </span> technologies.
          I specialize in creating dynamic and responsive web applications using
          MongoDB, Express.js, React, and Node.js. With a keen eye for detail and
        a commitment to writing clean, efficient code, I strive to deliver 
        high-quality solutions that meet client needs and exceed expectations.
        </>
      ),
    },
    {
      title: (
        <>
          <span className="text-[#FF6B00]">Frontend</span> Developer
        </>
      ),
      content: ( <>
        As a frontend developer, I am skilled in creating visually appealing
        and user-friendly interfaces using the latest web technologies. I have a
        strong understanding of HTML, CSS, and JavaScript, and I am proficient in
        frameworks like <span className='text-[#FF6B00] font-semibold'>React</span> and <span className='text-[#FF6B00] font-semibold'>Next.js</span>. My goal is to provide seamless user
        experiences and ensure that applications are not only functional but also
        enjoyable to use.
      </>),
    },
    {
      title: "Started Learning Development",
      content: `I started learning web development in January 2024. Since then, I have
      been continuously improving my skills and knowledge in web development.`,
      sub: "Jan 2024",
    },
  ];

  return (
    <div className="my-16 max-w-6xl mx-auto px-7 " id="about">
      <h1 className="text-3xl font-semibold mb-12 text-start primary">
        About Me
      </h1>

      <div className="relative border-l-2 border-gray-800 pl-6 ml-10 space-y-10">
       
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
          
            <div className="hidden md:flex absolute -left-[4rem] top-3.5 w-4 h-4 bg-gray-400
            rounded-full shadow-md"></div>
           <div className="p-2">
             <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {section.title}
            </h2>
            {section.sub && (
              <p className="text-sm font-medium text-gray-500 mb-1">
                {section.sub}
              </p>
            )}
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
           </div>
           
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
