"use client";
import { motion } from "framer-motion";

const Cocktail = ({ index, cocktail }) => {
  return (
    <motion.li key={index} className="relative grid group" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <div className="absolute z-10 text-5xl bg-[var(--prime)] px-6 py-1 -top-7 left-2 transition-transform duration-150 group-hover:-rotate-12">
        <h3>{cocktail.name}</h3>
      </div>
      <img className="row-start-1 col-start-1" src={cocktail.image} />
      <div className="row-start-1 col-start-1 bg-[#0F350C] opacity-0 group-hover:opacity-60 transition-opacity duration-150"></div>

      <ul className="pl-4 row-start-1 col-start-1 self-center text-2xl text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        {(cocktail.ingredients || []).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.li>
  );
};

export default Cocktail;
