import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Vinod Kumar",
    role: "Owner, Vinod Watches",
    feedback:
      "Raju built a modern website for my watch business. The premium design and smooth performance helped us attract more customers.",
    image: "/client1.png",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Artist, Painter",
    feedback:
      "Raju created a stunning portfolio site for my paintings. The layout was clean and showcased my artwork beautifully.",
    image: "/client3.png",
  },
  {
    id: 3,
    name: "Ananya sharma ",
    role: "Pharma Business",
    feedback:
      "Raju developed a professional platform for our pharma business. The site was responsive, fast, and easy to manage.",
    image: "/girl.png",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative bg-gray-50 py-28 px-6 text-gray-900 overflow-hidden"
    >
      <div className="absolute -top-20 left-10 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Trusted by <span className="text-indigo-600">Clients</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Real feedback from businesses and creators I’ve worked with.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {testimonials.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-indigo-400/60 to-purple-400/60"
          >
            <div className="h-full bg-white backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-indigo-400/60 shadow-lg"
                  />
                </div>

                <h3 className="text-xl font-semibold">{review.name}</h3>
                <p className="text-indigo-600 text-sm mb-4">{review.role}</p>

                <p className="text-gray-700 italic leading-relaxed mb-6">
                  “{review.feedback}”
                </p>
                <div className="flex space-x-1 text-yellow-500 text-lg">
                  ★★★★★
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;