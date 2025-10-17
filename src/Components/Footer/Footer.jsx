import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Left: Copyright */}
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Md. Hasnat | All rights reserved.
        </p>

        {/* Right: Scroll to top */}
        <button
          onClick={handleScrollTop}
          className="bg-[#FF6B00] text-white p-2 rounded-full hover:bg-[#e55a00] transition-colors"
        >
          <IoIosArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
