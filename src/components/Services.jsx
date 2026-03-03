import { FaGlobe, FaPaintBrush, FaSearch, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Websites",
    description:
      "Responsive, high-performance websites crafted with modern technologies to elevate your business presence.",
    icon: <FaGlobe className="text-5xl text-indigo-600" />,
    gradient: "from-indigo-500 to-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-700",
  },
  {
    title: "Branding",
    description:
      "Strong visual identities that tell your brand story with clarity and creativity.",
    icon: <FaPaintBrush className="text-5xl text-purple-600" />,
    gradient: "from-purple-500 to-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "SEO",
    description:
      "Optimized websites that rank higher, attract organic traffic, and drive measurable growth.",
    icon: <FaSearch className="text-5xl text-emerald-600" />,
    gradient: "from-emerald-500 to-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    title: "AI Automation",
    description:
      "Smart automation solutions to streamline workflows, reduce costs, and boost productivity.",
    icon: <FaRobot className="text-5xl text-rose-600" />,
    gradient: "from-rose-500 to-rose-600",
    button: "bg-rose-600 hover:bg-rose-700",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Complete digital solutions designed to grow your business and deliver premium results.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl group"
            >     
              <div
                className={`absolute top-0 left-0 h-1 w-full rounded-t-2xl bg-gradient-to-r ${service.gradient}`}
              /> 
              <div className="rounded-xl bg-gray-50 p-5 w-fit transition group-hover:scale-110 group-hover:shadow-md">
                {service.icon}
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex gap-4 pt-6">
                <button
                  className={`rounded-full px-6 py-3 font-semibold text-white transition ${service.button} shadow-md hover:shadow-lg`}
                >
                  Contact
                </button>
                <button className="rounded-full border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 hover:border-indigo-400">
                  See Projects
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}