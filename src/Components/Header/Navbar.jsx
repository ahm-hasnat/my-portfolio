import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = ["home", "about", "skills", "projects", "contact"];

  const handleScroll = (id) => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    if (id === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const top = section.offsetTop - (20 + navbarHeight);
        window.scrollTo({ top, behavior: "smooth" });
      }
    }

    // Close mobile menu after clicking
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

      let current = "home";

      if (location.pathname.startsWith("/projects/") && location.pathname !== "/projects") {
        current = "projects";
      } else {
        navItems.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            const top = section.offsetTop - 130;
            const bottom = top + section.offsetHeight;
            if (scrollY >= top && scrollY < bottom) {
              current = id;
            }
          }
        });
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const displayedNavItems =
    location.pathname.startsWith("/projects/") && location.pathname !== "/projects"
      ? ["home", "projects"]
      : navItems;

  return (
    <div
      className={`navbar bg-base-100 fixed top-0 left-0 right-0 
        z-50 px-6 lg:px-20 py-2 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}
    >
      {/* Logo */}
      <div className="navbar-start">
        <a className="text-4xl font-bold">
          HA<span className="orange">S</span>NAT
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6">
          {displayedNavItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleScroll(item)}
                className={`transition-colors font-medium ${
                  active === item ? "text-[#FF6B00] underline" : "hover:text-[#FF6B00]"
                }`}
              >
                {item.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <div className="navbar-end lg:hidden">
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Hire Me Button for Desktop */}
      <div className="navbar-end hidden lg:flex">
        <a className="btn1 cursor-pointer flex items-center">
          HIRE ME
          <IoIosArrowForward className="text-xl font-bold" />
        </a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-lg flex flex-col items-center lg:hidden py-4 space-y-4">
          {displayedNavItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`transition-colors font-medium ${
                active === item ? "text-[#FF6B00] underline" : "hover:text-[#FF6B00]"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}

          {/* Mobile Hire Me */}
          <a className="btn1 cursor-pointer flex items-center mt-2">
            HIRE ME
            <IoIosArrowForward className="text-xl font-bold ml-2" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
