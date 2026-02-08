import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const scale = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function About() {
  return (
    <div className="container mx-auto py-16 px-6">
      <SectionTitle
        title="About SJGVS"
        subtitle="Working for rural transformation since 2009"
      />

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl shadow-card hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-all duration-500 ease-in-out"
          src="https://sjgvs.org.in/images/slider/IMG-20200716-WA0065.jpg"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            className="mb-4 text-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            SJGVS works with marginalized communities to create sustainable
            livelihood, health awareness and social empowerment.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-4 mt-6"
            variants={scale}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ y: -10, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <motion.h3
                  className="font-bold"
                  whileHover={{ color: "#2E7D32" }}
                  transition={{ duration: 0.3 }}
                >
                  Vision
                </motion.h3>
                <p>Self reliant rural society</p>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <motion.h3
                  className="font-bold"
                  whileHover={{ color: "#1565C0" }}
                  transition={{ duration: 0.3 }}
                >
                  Mission
                </motion.h3>
                <p>Empowering poorest families</p>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
