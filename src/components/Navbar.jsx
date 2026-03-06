import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
       >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        
       <motion.h1
        whileHover={{ scale: 1.08 }}
        className={`text-4xl md:text-5xl font-bold tracking-wider cursor-pointer ${
        scrolled ? "text-gray-900" : "text-white"
        } font-[Poppins] uppercase`}
        onClick={() => scrollToSection("#home")}
         >
         <span className="tracking-tight">Raju</span>{" "}
         <span className="font-extrabold">Mishra</span>
         </motion.h1>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.link)}
              className={`font-medium px-4 py-2 rounded-md border transition-all duration-300 ${
                scrolled
                  ? "text-gray-700 border-gray-300 hover:text-indigo-600 hover:border-indigo-600"
                  : "text-gray-200 border-white/40 hover:text-indigo-400 hover:border-indigo-400"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
              scrolled
                ? "border-gray-300 text-gray-800"
                : "border-white/40 text-white"
            }`}
          >
            📞 <span className="text-sm font-medium">+91 7827264825</span>
          </div>

          <a
            href="/RAJUMISHRA_RESUME.pdf"
            download="RAJUMISHRA_RESUME.pdf"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:scale-105 transition duration-300 shadow-md hover:shadow-xl"
          >
            ⬇ Resume
          </a>
        </div>

        
        <div className="md:hidden">
          {open ? (
            <X
              onClick={() => setOpen(false)}
              className={`w-7 h-7 cursor-pointer ${
                scrolled ? "text-gray-800" : "text-gray-300"
              }`}
            />
          ) : (
            <Menu
              onClick={() => setOpen(true)}
              className={`w-7 h-7 cursor-pointer ${
                scrolled ? "text-gray-800" : "text-gray-300"
              }`}
            />
          )}
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden ${
            scrolled
              ? "bg-white border-t border-gray-200"
              : "bg-gray-900/95 backdrop-blur-md border-t border-gray-700"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.link)}
                className={`text-lg font-medium px-4 py-2 rounded-md border ${
                  scrolled
                    ? "text-gray-800 border-gray-300 hover:text-indigo-600 hover:border-indigo-600"
                    : "text-gray-300 border-white/30 hover:text-indigo-400 hover:border-indigo-400"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;