"use client";
import { useEffect, useState } from "react";
import { getCocktails } from "@/lib/api";

export default function Home() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const cocktailData = await getCocktails();
      setCocktails(cocktailData);
      console.log("cocktails:", cocktails);
    }

    fetchData();
  }, []);

  return <div></div>;
}
