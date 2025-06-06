"use client";
import { useRef } from "react";
import Review from "./review";

const ScrollBox = () => {
  const scrollRef = useRef(null);
  const currentIndexRef = useRef(0);

  const scrollToIndex = (index) => {
    const item = scrollRef.current?.children[0]?.children[index];
    item?.scrollIntoView({ behavior: "smooth", inline: "center" });
    currentIndexRef.current = index;
  };

  const scrollLeft = () => {
    const prev = currentIndexRef.current;
    const next = Math.max(prev - 1, 0);
    scrollToIndex(next);
  };

  const scrollRight = () => {
    const prev = currentIndexRef.current;
    const next = prev + 1;
    scrollToIndex(next);
  };

  return (
    <section className="py-20">
      <div ref={scrollRef} className="col-start-2 col-end-4 overflow-x-hidden md:overflow-x-auto py-10 scrollbar-thin">
        <Review />
      </div>
      <div className="flex justify-between items-center md:hidden px-4 mb-4">
        <button onClick={scrollLeft} className="bg-[var(--action)] py-4 px-5 rounded-full text-4xl text-white">
          ←
        </button>
        <button onClick={scrollRight} className="bg-[var(--action)] py-4 px-5 rounded-full text-4xl text-white">
          →
        </button>
      </div>
    </section>
  );
};

export default ScrollBox;
