import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-stretch gap-16">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="flex justify-center items-center"
  >
    <img
      src="/about1.webp"
      alt="About Illustration"
      className="w-full h-full max-h-[500px] object-cover rounded-2xl shadow-xl"
    />
  </motion.div>
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="flex flex-col justify-center space-y-6 h-full max-h-[500px]"
  >
    <div className="bg-gradient-to-r from-indigo-500 to-teal-500 text-white text-3xl font-bold py-4 px-8 rounded-xl inline-block shadow-md">
      About Me
    </div>

    <h3 className="text-2xl font-semibold text-gray-900">
      A little bit about me
    </h3>
    <p className="text-gray-700 leading-relaxed text-lg">
      I am a passionate <span className="font-semibold text-indigo-600">Full-Stack Developer</span> specializing in the MERN stack.  
      I love building scalable, modern web applications that deliver premium user experiences.
    </p>

    <p className="text-gray-700 leading-relaxed text-lg">
      With expertise in <span className="font-semibold text-teal-600">React, Node.js, MongoDB, and Express</span>,  
      I design clean UIs, craft efficient APIs, and ensure smooth end-to-end functionality.  
      My focus is always on performance, responsiveness, and user delight.
    </p>
    <ul className="space-y-3 text-gray-800">
      <li>✔️ Strong foundation in UI/UX design</li>
      <li>✔️ Hands-on experience with authentication & APIs</li>
      <li>✔️ Skilled in debugging and scalable architecture</li>
    </ul>
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition"
    >
      Let’s Connect
    </motion.a>
  </motion.div>
</div>
    </section>
  );
};

export default About;