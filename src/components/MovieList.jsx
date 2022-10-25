import { useState, useEffect } from "react";
import Movie from "./Movie";
/* import movieList from "../movies.json"; */
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function MovieList({ rating }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=d31021610512441435829706f00ea294&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );

    setMovies([...movies, ...response.data.results]);
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    getMovies();
  });
  /* 
  let filteredMovies = movies.filter(
    (movie) => movie.vote_average >= (rating - 1) * 2
  ); */

  return (
    movies && (
      <div className="container">
        <InfiniteScroll
          className="row"
          dataLength={movies.length}
          next={getMovies}
          hasMore={true}
        >
          {movies.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </InfiniteScroll>
      </div>
    )
  );
}

export default MovieList;
