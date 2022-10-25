import { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";

function MovieList({ rating }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d31021610512441435829706f00ea294&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      );
      setMovies(response.data.results);
    };
    getMovies();
  }, []);

  let filteredMovies = movies.filter(
    (movie) => movie.vote_average >= (rating - 1) * 2
  );

  return (
    movies && (
      <div className="container">
        <div className="row">
          {filteredMovies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    )
  );
}

export default MovieList;
