import { React } from "react";

import { Rating } from "react-simple-star-rating";

function RatingFilter({ rating, setRating }) {
  return (
    <div className="ratingStars">
      <h5 className="text-white">Filter by rating</h5>
      <Rating onClick={(rate) => setRating(rate)} />
    </div>
  );
}

export default RatingFilter;
