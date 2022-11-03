import React from "react";
import { Star } from "./Star";
import { useRating } from "../../hooks/useRating";

const createArray = length => [...Array(length)];

const Rating = () => {

  let total = useRating();

  return (
    <div>
      {
        createArray(5).map(
          (el, i) => {
            return <Star 
              key={i}
              selected={total > i}
            />
          }
        )
      }
    </div>
  );
};

export { Rating };