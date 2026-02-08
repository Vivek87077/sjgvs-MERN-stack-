import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { fadeUp, scale } from "../animations/variants";

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  amount: z.string().min(1),
  cause: z.string(),
});

export default function Donate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    // yaha baad me payment call
  };

  const causes = [
    "Community Organization",
    "SHG Creation",
    "Health System",
    "Corpus Fund",
  ];

  return (
    <div className="container mx-auto py-16 px-6">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-3xl font-heading mb-8 text-center"
        whileHover={{ scale: 1.05, color: "#2E7D32" }}
        transition={{ duration: 0.3 }}
      >
        Support Our Mission
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-card hover:shadow-2xl transition-shadow duration-500"
        variants={scale}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* CAUSE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-6"
        >
          <motion.label
            className="block mb-2 text-ngoGreen font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            Select Cause
          </motion.label>
          <motion.select
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-ngoGreen focus:outline-none transition-all duration-300 hover:border-ngoBlue hover:shadow-md"
            {...register("cause")}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.05, borderColor: "#2E7D32" }}
          >
            {causes.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </motion.select>
        </motion.div>

        {/* AMOUNT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6"
        >
          <motion.label
            className="block mb-2 text-ngoGreen font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            Amount
          </motion.label>
          <motion.input
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-ngoGreen focus:outline-none transition-all duration-300 hover:border-ngoBlue hover:shadow-md"
            placeholder="Enter amount"
            {...register("amount")}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.05, borderColor: "#2E7D32" }}
          />
          {errors.amount && (
            <motion.p
              className="text-red-500 mt-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Required
            </motion.p>
          )}
        </motion.div>

        {/* NAME */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-6"
        >
          <motion.input
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-ngoGreen focus:outline-none transition-all duration-300 hover:border-ngoBlue hover:shadow-md"
            placeholder="Name"
            {...register("name")}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.05, borderColor: "#2E7D32" }}
          />
        </motion.div>

        {/* EMAIL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6"
        >
          <motion.input
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-ngoGreen focus:outline-none transition-all duration-300 hover:border-ngoBlue hover:shadow-md"
            placeholder="Email"
            {...register("email")}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.05, borderColor: "#2E7D32" }}
          />
        </motion.div>

        {/* PHONE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-8"
        >
          <motion.input
            className="w-full border-2 border-gray-300 p-3 rounded-lg focus:border-ngoGreen focus:outline-none transition-all duration-300 hover:border-ngoBlue hover:shadow-md"
            placeholder="Phone"
            {...register("phone")}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.05, borderColor: "#2E7D32" }}
          />
        </motion.div>

        <motion.button
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(46, 125, 50, 0.5)",
            backgroundColor: "#1B5E20",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-ngoGreen text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
        >
          Proceed to Donate
        </motion.button>
      </motion.form>
    </div>
  );
}
