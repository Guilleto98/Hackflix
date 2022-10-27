import { useState, useEffect } from "react";
import Movie from "./Movie";
/* import movieList from "../movies.json"; */
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function MovieList({ rating, movies, setMovies }) {
  const [page, setPage] = useState(1);
  const [prevRating, setPrevRating] = useState(0);

  const getMovies = async () => {
    const response = await axios({
      url: `https://api.themoviedb.org/3/discover/movie?`,
      method: "GET",
      params: {
        api_key: `d31021610512441435829706f00ea294`,
        language: `en-US`,
        sort_by: `popularity.desc`,
        include_adult: false,
        include_video: false,
        page: page,
        "vote_count.gte": 1000,
        "vote_average.gte": (rating - 1) * 2,
        with_watch_monetization_types: `flatrate`,
      },
    });

    setMovies([...movies, ...response.data.results]);
    console.log(rating);
    console.log(movies.length);
  };

  useEffect(() => {
    if (rating !== prevRating) {
      setMovies([]);
    }
    getMovies();
  }, [page, rating]); // eslint-disable-line

  /* useEffect(() => {
    getMovies();
  }, [page]); */ // eslint-disable-line

  /* useEffect(() => { */
  /* setPage(1)
    setMovies([]);
    getMovies(); */
  /* }, [rating]); */

  return (
    movies && (
      <div className="container">
        <InfiniteScroll
          className="row"
          dataLength={movies.length}
          next={() => {
            setPage(page + 1);
          }}
          hasMore={true}
        >
          {movies.map((movie, index) => {
            return <Movie movie={movie} key={index} />;
          })}
        </InfiniteScroll>
      </div>
    )
  );
}

export default MovieList;
