// Contact.jsx
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Let’s Build Something Great Together
          </h1>
          <div className="flex flex-wrap gap-3">
            {["Websites", "Branding", "Ecommerce", "SEO"].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur-sm shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">
        
        {/* Left Info */}
        <div className="lg:col-span-7 space-y-14">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              I am a passionate full-stack developer specializing in MERN stack and modern web applications. 
              With freelancing and internship experience, I am ready to deliver premium solutions for your business.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <a
                href="mailto:Rajumishra6201@gmail.com"
                className="text-indigo-600 font-medium hover:underline"
              >
                Rajumishra6201@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Call</h3>
              <p className="text-2xl font-bold text-emerald-600">
                +91 7827264825
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Stay Connected</h2>
            <div className="flex gap-6 text-2xl">
              {[
                { icon: <FaGithub />, link: "https://github.com/Rajumishra23" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/raju-frontend-developer" },
                { icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
                { icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border border-gray-300 text-gray-600 hover:border-emerald-600 hover:text-emerald-600 transition duration-300 shadow-sm hover:shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Project Details</label>
                <textarea
                  rows="5"
                  placeholder="Describe your idea..."
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-600 py-4 font-semibold text-white hover:bg-emerald-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}