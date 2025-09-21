"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Service = () => {
  // State to keep track of which button is selected (0 = first button)
  const [activeIndex, setActiveIndex] = useState(0);

  // Content for each button (text + optional image)
  const content = [
    {
      button: "Events",
      title: "Events",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/images/mojito.avif",
    },
    {
      button: "Lej en bartender",
      title: "Lej en bartender",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/images/paloma.avif",
    },
    {
      button: "Cocktail kursus",
      title: "Cocktail kursus",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/images/strawberry.avif",
    },
    {
      button: "Cocktail dispensere",
      title: "Cocktail dispensere",
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "/images/whiskeysour.avif",
    },
  ];

  return (
    <motion.div className="flex flex-col" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
      {/* Buttons */}
      <div className="flex gap-4">
        {content.map((_, index) => (
          <button key={index} onClick={() => setActiveIndex(index)} className={`px-4 py-2 amatic text-3xl font-bold border-2 ${activeIndex === index ? "bg-[var(--secondary)] text-white" : "bg-[var(--secondbg)] text-[var(--text)]"}`}>
            {content[index].button}
          </button>
        ))}
      </div>

      {/* Text + Image */}
      <div className="mt-6 md:grid grid-cols-2 gap-4">
        <div className="grid">
          <h2 className="text-3xl">{content[activeIndex].title}</h2>
          <p className="">{content[activeIndex].text}</p>
          <a className="amatic bg-[var(--action)] justify-self-start self-end mb-6 mt-6 md:mb-0 md:mt-0 text-white text-4xl px-6 py-2 border-2 border-transparent md:hover:border-[var(--text)] md:hover:bg-transparent md:hover:text-[var(--text)] font-bold transition-all duration-150" href="#contact">
            Få et tilbud
          </a>
        </div>
        {content[activeIndex].image && <img src={content[activeIndex].image} alt={`Service ${activeIndex + 1}`} className="" />}
      </div>
    </motion.div>
  );
};

export default Service;
