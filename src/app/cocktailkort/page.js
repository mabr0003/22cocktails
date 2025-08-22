"use client";

import Cocktail from "../components/cocktail";
import { cocktails } from "../data/cocktails";

export default function Cocktailkort() {
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
