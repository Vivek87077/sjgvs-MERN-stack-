import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-ngoGreen text-white p-4 fixed w-full top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="font-(--font-heading) text-xl cursor-pointer hover:text-ngoLight transition-colors duration-300"
        >
          SJGVS
        </motion.h1>

        <div className="space-x-6 flex">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/donate", label: "Donate" },
            { to: "/gallery", label: "Gallery" },
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -3, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-lg transition-all duration-300 ease-in-out hover:text-ngoLight hover:shadow-lg hover:bg-white/10 ${
                    isActive ? "text-ngoLight bg-white/10 shadow-lg" : ""
                  }`
                }
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-ngoLight rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
