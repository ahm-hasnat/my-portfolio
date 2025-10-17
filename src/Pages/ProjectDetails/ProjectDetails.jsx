import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowUp,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    id: "micro-tasking",
    name: "Micro Tasking & Earning Platform",
    date: "Oct 2025",
    description:
      "A modern and interactive Micro Tasking & Earning Platform where Workers, Buyers, and Admins come together to create, complete, and manage small tasks efficiently",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "Firebase",
    ],
    liveLink: "#",
    githubLink: "#",
    challenges: [
      "Implementing authentication and authorization flows securely.",
      "Optimizing performance for large datasets and queries.",
      "Ensuring responsive design across devices.",
    ],
    improvements: [
      "Add advanced analytics dashboard.",
      "Implement CI/CD pipeline for automated deployments.",
      "Integrate payment gateway for premium features.",
    ],
    image: "https://i.ibb.co/LzLHgWkg/Screenshot-2025-10-16-210221.png",
  },
  {
    id: "artifact-showcase",
    name: "Artifact showcase",
    date: "Sep 2025",
    description:
      "A dynamic and interactive web platform where users can explore historical artifacts, browse featured collections, add their own artifacts, and manage their personal contributions.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "Firebase",
    ],
    liveLink: "#",
    githubLink: "#",
    challenges: [
      "Handling complex data relationships.",
      "Responsive design for collections.",
    ],
    improvements: [
      "Add search & filter functionality.",
      "Enable multi-language support.",
    ],
    image: "https://i.ibb.co/h1nDPSMf/Screenshot-2025-10-16-212537.png",
  },
  {
    id: "gardening",
    name: "Gardening Community Platform",
    date: "Aug 2025",
    description:
      "A platform connecting gardening enthusiasts, allowing users to share tips, sell plants, and collaborate on gardening projects.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    liveLink: "#",
    githubLink: "#",
    challenges: [
      "Implementing real-time collaboration.",
      "Optimizing image uploads.",
    ],
    improvements: [
      "Add mobile app integration.",
      "Introduce gamification for engagement.",
    ],
    image: "https://i.ibb.co/k6yXdL48/Screenshot-2025-10-16-210657.png",
  },
];

// Map tech names to icons (use functions to avoid JSX error)
const techIcons = {
  React: () => <FaReact className="text-blue-500" />,
  "Next.js": () => <SiNextdotjs className="text-black" />,
  "Node.js": () => <FaNodeJs className="text-green-600" />,
  Express: () => <SiExpress className="text-gray-800" />,
  MongoDB: () => <SiMongodb className="text-green-500" />,
  TailwindCSS: () => <SiTailwindcss className="text-sky-400" />,
  Firebase: () => <SiFirebase className="text-yellow-500" />,
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project)
    return <p className="text-center mt-20 text-xl">Project not found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-5 my-16 mt-24">

         <Helmet>
                <title>Hasnat - project</title>
            </Helmet>
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.51)] flex flex-col justify-center 
        items-center gap-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
          <p className="text-lg mb-4">{project.date}</p>
          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#FF6B00] px-4 py-2 rounded hover:text-[#e55a00] hover:bg-black transition"
            >
              Live Project <FaExternalLinkAlt />
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              GitHub Client <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
        <div className="flex flex-wrap gap-4">
          {project.technologies.map((tech) => {
            const Icon = techIcons[tech];
            return (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-lg border flex items-center gap-2 cursor-pointer shadow-sm"
                style={{ borderColor: "#FF6B00" }}
              >
                {Icon && <Icon />}
                <span className="font-medium text-gray-800">{tech}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Overview */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed flex items-start gap-2">
          <span className="mt-2 w-3 h-3 bg-[#FF6B00] rounded-full flex-shrink-0"></span>
          <span>{project.description}</span>
        </p>
      </div>

      {/* Challenges */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Challenges Faced</h2>
        <ul className="space-y-2 text-gray-700">
          {project.challenges.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 w-3 h-3 bg-[#FF6B00] rounded-sm flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Improvements */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Potential Improvements</h2>
        <ul className="space-y-2 text-gray-700">
          {project.improvements.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-1 w-3 h-3 bg-[#FF6B00] rounded-sm flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
