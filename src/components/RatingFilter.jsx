import { React } from "react";

import { Rating } from "react-simple-star-rating";

function RatingFilter({ currentRating, setCurrentRating }) {
  return (
    <div className="ratingStars">
      <h5 className="text-white">Filter by rating</h5>
      <Rating onClick={(rate) => setCurrentRating(rate)} />
    </div>
  );
}

export default RatingFilter;
