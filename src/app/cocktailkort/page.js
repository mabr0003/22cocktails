"use client";
import { useEffect, useState } from "react";
import { getCocktails } from "@/lib/api";
import Cocktail from "../components/cocktail";

export default function Cocktailkort() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const cocktailData = await getCocktails();
      setCocktails(cocktailData);
      console.log("cocktails:", cocktails);
    }

    fetchData();
  }, []);

  return (
    <main>
      <section>
        <div className="content py-20">
          <div className="mb-20 max-w-prose">
            <h1 className="text-7xl">Husets favoritter</h1>
            <h2>De cocktails, vores bartendere selv ville bestille. Smag husets mest elskede favoritter.</h2>
          </div>
          <ul className="flex flex-col gap-20 md:grid grid-cols-3">
            {cocktails.map((cocktail, index) => (
              <Cocktail key={index} cocktail={cocktail} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
