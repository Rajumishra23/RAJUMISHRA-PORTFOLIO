import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0f0f14] text-white overflow-hidden">
      <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-indigo-500 opacity-60 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-[400px] h-[400px] bg-teal-400 opacity-60 blur-[100px] rounded-full"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-teal-900/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full text-sm text-gray-300 backdrop-blur-md shadow-md">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for Opportunities
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-500">
              Raju Mishra
            </span>
            <br />
            Full Stack Developer
          </h1>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            I specialize in building scalable, high-performance web applications using the MERN stack. 
            Focused on clean code, responsive design, and solving real-world problems with modern technologies.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="pt-6 text-gray-500 text-sm font-bold">
            Skilled in : React • Node.js • MongoDB • MySQL • Python
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-indigo-600 rounded-2xl blur-[80px] opacity-50"></div>
            <img
              src="/raju.webp"
              alt="Raju Mishra"
              className="relative w-[340px] md:w-[420px] rounded-2xl border border-white/10 shadow-2xl hover:scale-105 transition duration-500"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-indigo-500/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;