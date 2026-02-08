import { motion } from "framer-motion";

export default function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-card p-6"
    >
      {children}
    </motion.div>
  );
}
