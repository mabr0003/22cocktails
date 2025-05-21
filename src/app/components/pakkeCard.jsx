"use client";
import { motion } from "framer-motion";

const PakkeCard = () => {
  return (
    <motion.div className="relative shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <div className="absolute z-10 text-5xl bg-[var(--prime)] px-6 py-1 -top-7 left-2">
        <h3>Mojito</h3>
      </div>

      <img src="/images/herodummy.png" />
      <div className="bg-[var(--secondbg)] px-3 py-6 flex flex-col gap-4">
        <h3 className="text-3xl">6 cocktails</h3>
        <div className="flex justify-between">
          <span>20-50 gæster</span>
          <span>fra DKK 10.000</span>
        </div>
        <div className="flex justify-between">
          <span>20-50 gæster</span>
          <span>fra DKK 10.000</span>
        </div>
        <div className="flex justify-between">
          <span>20-50 gæster</span>
          <span>fra DKK 10.000</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PakkeCard;
