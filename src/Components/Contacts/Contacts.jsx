import React from "react";
import { MdEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto my-30 px-5 flex flex-col lg:flex-row gap-10"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex-1">
        <h1
          className="text-lg font-medium text-start mb-5 primary border-l-4 border-[#FF6B00] pl-4"
        >
          Contact Me
        </h1>
        <p className="text-start font-bold primary mb-12 text-4xl">
          Feel free to reach out for collaborations or just a chat!
        </p>
        <div className="flex justify-start items-center gap-8">
          <div className="w-16 rounded-xl p-4 bg-[#fff3ead3] flex items-center justify-center">
            <span className="text-[#FF6B00] font-extrabold text-2xl">
              <MdOutlinePhoneInTalk />
            </span>
          </div>
          <div>
            <p className="secondary font-medium text-md">Phone</p>
            <p className="text-md font-bold primary">+8801234567890</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-8 mt-6">
          <div className="w-16 rounded-xl p-4 bg-[#fff3ead3] flex items-center justify-center">
            <span className="text-[#FF6B00] font-extrabold text-2xl">
              <MdEmail />
            </span>
          </div>
          <div>
            <p className="secondary font-medium text-md">Email</p>
            <p className="text-md font-bold primary">example@example.com</p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg border border-[#FF6B00] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg border border-[#FF6B00] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-[#FF6B00] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent"
          />
          <textarea
            rows="5"
            placeholder="Your Message..."
            className="w-full px-4 py-3 rounded-lg border border-[#FF6B00] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent resize-none"
            required
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="hover:bg-black hover:text-[#FF6B00] bg-[#FF6B00]
               text-white font-semibold px-8 py-2 rounded  transition-all 
               shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contacts;
