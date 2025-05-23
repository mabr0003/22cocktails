"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cocktail = ({ index, cocktail }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Detect screen width on mount + resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) setClicked((prev) => !prev);
  };

  return (
    <motion.li className="relative grid group cursor-pointer shadow-[-2px_21px_23px_12px_rgba(0,_0,_0,_0.1)]" onClick={handleClick} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      {/* Header */}
      <div
        className={`absolute z-10 text-5xl bg-[var(--prime)] px-6 py-1 -top-7 left-2 transition-transform duration-150
          ${isMobile && clicked ? "-rotate-12" : ""}
          md:group-hover:-rotate-12`}
      >
        <h3>{cocktail.name}</h3>
      </div>

      {/* Image */}
      <img className="row-start-1 col-start-1 w-full" src={cocktail.image} alt={cocktail.name} />

      {/* Overlay */}
      <div
        className={`row-start-1 col-start-1 bg-[#0F350C] transition-opacity duration-150
          ${isMobile && clicked ? "opacity-60" : "opacity-0"}
          md:group-hover:opacity-60`}
      ></div>

      {/* Ingredients List */}
      <ul
        className={`pl-4 row-start-1 col-start-1 self-center text-2xl text-white z-10 transition-opacity duration-150
          ${isMobile && clicked ? "opacity-100" : "opacity-0"}
          md:group-hover:opacity-100`}
      >
        {(cocktail.ingredients || []).map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.li>
  );
};

export default Cocktail;
