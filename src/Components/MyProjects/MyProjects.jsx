import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const projects = [
  {
    id: "micro-tasking",
    name: "Micro Tasking & Earning Platform",
    date: "Oct 2025",
    description:
      "A modern and interactive Micro Tasking & Earning Platform where Workers, Buyers, and Admins come together to create, complete, and manage small tasks efficiently",
    link: "/projects/micro-tasking",
    image: "https://i.ibb.co/LzLHgWkg/Screenshot-2025-10-16-210221.png",
  },
  {
    id: "artifact-showcase",
    name: "Artifact showcase",
    date: "Sep 2025",
    description:
      "A dynamic and interactive web platform where users can explore historical artifacts, browse featured collections, add their own artifacts, and manage their personal contributions.",
    link: "/projects/artifact-showcase",
    image: "https://i.ibb.co/h1nDPSMf/Screenshot-2025-10-16-212537.png",
  },
  {
    id: "gardening",
    name: "Gardening Community Platform",
    date: "Aug 2025",
    description:
      "A platform connecting gardening enthusiasts, allowing users to share tips, sell plants, and collaborate on gardening projects.",
    link: "/projects/gardening",
    image: "https://i.ibb.co/k6yXdL48/Screenshot-2025-10-16-210657.png",
  },
];

const MyProjects = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 mt-24 px-5" id="projects">
      <h1 className="text-3xl font-semibold text-center mb-6 primary">
        My <span className="text-[#FF6B00]">Projects</span>
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Here are some of the projects I've worked on recently. Click to view
        more details.
      </p>
      <div className="space-y-16">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-6  
                rounded-2xl overflow-hidden ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="w-full md:w-2/5">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-sm"
                />
              </div>

              <div className="w-full md:w-3/5 bg-white p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="self-start bg-[#FF6B00] text-white px-4 py-2 rounded
       hover:bg-black hover:text-[#FF6B00] transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
