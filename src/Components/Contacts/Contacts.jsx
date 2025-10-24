import React from "react";
import { MdEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto my-24 px-7 flex flex-col lg:flex-row gap-10"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex-1">
        <h1 className="text-lg font-medium text-start mb-5 primary border-l-4 border-[#FF6B00] pl-4">
          Contact Me
        </h1>
        <p className="text-start font-bold primary mb-12 text-3xl">
          Feel free to reach out for collaborations or just a chat!
        </p>
        {/* Phone */}
        <div className="flex justify-start items-center gap-8">
          <div className="w-16 rounded-xl p-4 bg-[#fff3ead3] flex items-center justify-center">
            <span className="text-[#FF6B00] font-extrabold text-2xl">
              <MdOutlinePhoneInTalk />
            </span>
          </div>
          <div>
            <p className="secondary font-medium text-md">Phone</p>
            <a
              href="tel:+8801737779323"
              className="text-md font-bold primary hover:underline"
            >
              +8801737779323
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex justify-start items-center gap-8 mt-6">
          <div className="w-16 rounded-xl p-4 bg-[#fff3ead3] flex items-center justify-center">
            <span className="text-[#25D366] font-extrabold text-2xl">
              <FaWhatsapp />
            </span>
          </div>
          <div>
            <p className="secondary font-medium text-md">WhatsApp</p>
            <a
              href="https://wa.me/8801737779323?text=Hi%20Hasnat,%20I%20want%20to%20connect%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-bold primary hover:underline"
            >
              +8801605587523
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex justify-start items-center gap-8 mt-6">
          <div className="w-16 rounded-xl p-4 bg-[#fff3ead3] flex items-center justify-center">
            <span className="text-[#FF6B00] font-extrabold text-2xl">
              <MdEmail />
            </span>
          </div>
          <div>
            <p className="secondary font-medium text-md">Email</p>
            <a
              href="mailto:m.hasnat.0@gmail.com"
              className="text-md font-bold primary hover:underline"
            >
              ahm.hasnat.0@gmail.com
            </a>
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
