"use client";
import { motion } from "framer-motion";

const ContactBox = () => {
  return (
    <motion.div className="flex flex-col gap-6 bg-[var(--secondbg)] py-16 px-4 -mt-40 mb-6 shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      <div id="contact">
        <h2 className="font-bold uppercase">Telefon</h2>
        <a href="tel:+4542571111">+45 42 57 11 11</a>
      </div>
      <div>
        <h2 className="font-bold uppercase">Email</h2>
        <a href="mailto:info@22cocktails.dk">info@22cocktails.dk</a>
      </div>
    </motion.div>
  );
};

export default ContactBox;
