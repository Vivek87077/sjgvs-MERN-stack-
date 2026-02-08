import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { fadeUp, scale } from "../animations/variants";

const images = [
  {
    id: 1,
    cat: "education",
    url: "https://sjgvs.org.in/components/com_eventgallery/helpers/image.php?&width=1600&folder=photo-gallery&file=IMG-20200716-WA0063.jpg",
  },
  {
    id: 2,
    cat: "health",
    url: "https://sjgvs.org.in/components/com_eventgallery/helpers/image.php?&width=1600&folder=photo-gallery&file=IMG-20200716-WA0088.jpg",
  },
  {
    id: 3,
    cat: "shg",
    url: "https://sjgvs.org.in/components/com_eventgallery/helpers/image.php?&width=1600&folder=photo-gallery&file=IMG-20200716-WA0104.jpg",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const data =
    filter === "all" ? images : images.filter((i) => i.cat === filter);

  return (
    <div className="container mx-auto py-16 px-6">
      <SectionTitle title="Gallery" subtitle="Glimpses of our work" />

      {/* FILTER */}
      <div className="flex gap-4 justify-center mb-8">
        {["all", "health", "education", "shg"].map((c) => (
          <button
            onClick={() => setFilter(c)}
            className="px-4 py-2 border rounded"
          >
            {c}
          </button>
        ))}
      </div>

      {/* GRID */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={scale}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {data.map((img, index) => (
          <motion.div
            key={img.id}
            className="relative overflow-hidden rounded-xl shadow-card hover:shadow-2xl transition-shadow duration-500"
            whileHover={{ y: -10, rotate: 1 }}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <motion.img
              whileHover={{ scale: 1.1, brightness: 1.1 }}
              className="rounded-xl h-60 w-full object-cover cursor-pointer"
              src={img.url}
              alt={img.cat}
            />
            <motion.div
              className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
              whileHover={{ opacity: 1 }}
            >
              <motion.span
                className="text-white font-bold text-lg capitalize bg-ngoGreen/80 px-4 py-2 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                {img.cat}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
