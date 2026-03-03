
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A full-featured MERN stack e-commerce platform with cart, authentication, and payment integration.",
    image: "/dempsy.webp",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://dempsey-raju.vercel.app/",
    github: "https://github.com/raju/ecommerce", 
  },
  {
    title: "Scratch Art Website",
    description:
      "Modern responsive portfolio built with React and Tailwind CSS.",
    image: "/art.webp",
    tech: ["React", "Tailwind"],
    live: "https://scratch-art-raju-h95e.vercel.app/",
    github: "https://github.com/raju/scratch-art",
  },
  {
    title: "Matrimonial Website",
    description:
      "A productivity app with authentication and real-time task updates.",
    image: "/metrimonial.webp",
    tech: ["MERN", "JWT", "Express"],
    live: "https://metrimonial-site-raju.vercel.app/",
    github: "https://github.com/raju/metrimonial",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing my recent works — crafted with passion, precision, and premium design.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-full"></div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full font-medium shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-white font-semibold transition hover:bg-indigo-700 shadow-md hover:shadow-lg"
                  >
                    Live <FaExternalLinkAlt size={14} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border-2 border-gray-300 px-5 py-2 font-semibold text-gray-700 transition hover:bg-gray-50 hover:border-indigo-400"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}