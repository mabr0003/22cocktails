"use client";
import { motion } from "framer-motion";

const HeroHeader = ({ text }) => {
  return (
    <motion.div className="bg-[var(--prime)] text-[60px] text-center px-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <h1>{text}</h1>
    </motion.div>
  );
};

export default HeroHeader;
