"use client";
import { motion } from "framer-motion";

const PakkeCard = ({ pakke, amount, price1, price2, price3 }) => {
  return (
    <motion.div className="relative shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <div className="absolute z-10 text-5xl bg-[var(--prime)] px-6 py-1 -top-7 left-2">
        <h3>{pakke}</h3>
      </div>

      <img src="/images/setup.avif" alt="bar" />
      <div className="bg-[var(--secondbg)] px-3 py-6 flex flex-col gap-4">
        <h3 className="text-3xl">{amount} cocktails</h3>
        <div className="flex justify-between">
          <span>20-50 gæster</span>
          <span>fra DKK {price1}</span>
        </div>
        <div className="flex justify-between">
          <span>50-100 gæster</span>
          <span>fra DKK {price2}</span>
        </div>
        <div className="flex justify-between">
          <span>100+ gæster</span>
          <span>fra DKK {price3}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PakkeCard;
