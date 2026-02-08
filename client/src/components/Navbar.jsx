import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-ngoGreen text-white p-4"
    >
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">SJGVS</h1>

        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/donate">Donate</Link>
        </div>
      </div>
    </motion.nav>
  );
}
