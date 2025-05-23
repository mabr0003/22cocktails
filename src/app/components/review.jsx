import { useEffect, useState } from "react";
import { getReviews } from "@/lib/api";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const reviewsData = await getReviews();
      setReviews(reviewsData);
    }

    fetchData();
  }, []);

  return (
    <ul className="flex w-full gap-4 scroll-snap-x">
      {reviews.map((review, index) => (
        <li key={index} className="flex flex-col flex-shrink-0 bg-[var(--secondbg)] max-w-[calc(100vw-2rem)] scroll-snap-align-center shadow-[0px_4px_21px_-10px_rgba(0,_0,_0,_0.1)]">
          <div className="bg-[var(--prime)] py-4 px-3">
            <h2>{review.name}</h2>
          </div>
          <div className="py-6 px-3 flex flex-col gap-2 max-w-96">
            <h2>{review.header}</h2>
            <p className="font-extralight italic">{`"${review.text}"`}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Review;
