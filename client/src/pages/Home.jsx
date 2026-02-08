import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section
        className="bg-linear-to-r from-ngoGreen to-ngoBlue
 text-white"
      >
        <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-heading mb-6">
              Empowering Rural India
            </h1>

            <p className="mb-6 text-lg">
              Working since 2009 to uplift communities through education, health
              and livelihood.
            </p>

            <Link
              to="/donate"
              className="bg-white text-ngoGreen px-6 py-3 rounded-lg font-bold"
            >
              Donate Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              className="rounded-xl shadow-card"
              src="https://images.unsplash.com/photo-ngo"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {[
            { n: "5000+", t: "Beneficiaries" },
            { n: "200+", t: "Villages" },
            { n: "15+", t: "Programs" },
          ].map((i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 text-center shadow-card rounded-xl"
            >
              <h2 className="text-4xl text-ngoGreen font-bold">{i.n}</h2>
              <p>{i.t}</p>
            </motion.div>
          ))}
        </div>
      </section>

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
          ].map((p) => (
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-card"
            >
              <h3 className="font-bold mb-2">{p}</h3>
              <p>Empowering rural families...</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-ngoBlue text-white text-center">
        <h2 className="text-4xl mb-6">Be The Change</h2>

        <Link
          to="/donate"
          className="bg-white text-ngoBlue px-8 py-3 rounded-lg"
        >
          Support Us
        </Link>
      </section>
    </div>
  );
}
