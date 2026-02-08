import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-linear-to-r from-ngoGreen to-ngoBlue text-white">
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <motion.h1
              className="text-5xl font-heading mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Rural India
            </motion.h1>

            <motion.p
              className="mb-6 text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Working since 2009 to uplift communities
            </motion.p>

            <Link
              to="/donate"
              className="bg-white text-ngoGreen px-6 py-3 rounded-lg font-bold hover:bg-ngoGreen hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              Donate Now
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img
              className="rounded-xl shadow-card w-full hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-500 ease-in-out"
              src="https://sjgvs.org.in/images/slider/IMG-20200716-WA0061.jpg"
              alt="ngo"
            />
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {[
            { n: "5000+", t: "Beneficiaries" },
            { n: "200+", t: "Villages" },
            { n: "15+", t: "Programs" },
          ].map((i, index) => (
            <motion.div
              key={index}
              className="p-6 text-center shadow-card rounded-xl hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:bg-ngoLight/20 transition-all duration-300 ease-in-out"
            >
              <motion.h2
                className="text-4xl text-ngoGreen font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, color: "#1565C0" }}
              >
                {i.n}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {i.t}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-16 bg-ngoLight">
        <h2 className="text-center text-3xl font-heading mb-10">
          Our Programs
        </h2>

        <div className="container mx-auto grid md:grid-cols-4 gap-6">
          {[
            "Community Development",
            "SHG Formation",
            "Health System",
            "Education",
          ].map((p, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-card hover:shadow-2xl hover:scale-105 hover:rotate-1 hover:bg-ngoLight/20 hover:border-2 hover:border-ngoGreen/30 transition-all duration-300 ease-in-out"
            >
              <motion.h3
                className="font-bold mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, color: "#2E7D32" }}
              >
                {p}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                Empowering rural families...
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
