import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiFigma,
  SiStripe,
} from "react-icons/si";

const allSkills = [
  { name: "HTML", icon: <FaHtml5 size={30} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt size={30} color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJsSquare size={30} color="#F7DF1E" /> },
  { name: "React", icon: <FaReact size={30} color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={30} color="#000000" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={30} color="#38B2AC" /> },
  { name: "Firebase", icon: <SiFirebase size={30} color="#FFCA28" /> },
  { name: "Figma", icon: <SiFigma size={30} color="#F24E1E" /> },
  { name: "Stripe", icon: <SiStripe size={30} color="#008CDD" /> },
  { name: "Node.js", icon: <FaNodeJs size={30} color="#339933" /> },
  { name: "Express.js", icon: <SiExpress size={30} color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb size={30} color="#4DB33D" /> },
];

const MySkills = () => {
  return (
    <div className="max-w-6xl mx-auto px-7" id="skills">
      <h1 className="text-3xl font-semibold  mb-10 primary text-center">
        My Ski<span className="text-[#FF6B00]">ll</span>s
      </h1>

      <div className="bg-[#fff3ead3] p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold text-[#4D4D4D] mb-12 text-center">
          What I Bring to the Table
        </h2>

        <div className="flex flex-wrap gap-12 justify-center">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 cursor-pointer bg-white rounded-lg px-4 py-2 shadow hover:shadow-lg transition-all"
            >
              {skill.icon}
              <span className="text-lg font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
