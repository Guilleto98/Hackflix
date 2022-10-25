/* import { useState, useEffect } from "react"; */
import Movie from "./Movie";
import movieList from "../movies.json";

function MovieList({ rating }) {
  let filteredMovies = movieList.filter(
    (movie) => movie.vote_average >= (rating - 1) * 2
  );

  return (
    <div className="container">
      <div className="row">
        {filteredMovies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
}

export default MovieList;
