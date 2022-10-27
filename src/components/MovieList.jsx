import { useState, useEffect } from "react";
import Movie from "./Movie";
/* import movieList from "../movies.json"; */
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

function MovieList({ currentRating }) {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = (page, rating) => {
    return axios({
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
        append_to_response: "credits",
      },
    }).then((result) => {
      return result.data.results;
    });
  };

  useEffect(() => {
    (async () => {
      setCurrentPage(1);
      const newMovies = await fetchMovies(1, currentRating);
      setMovieList([...newMovies]);
    })();
  }, [currentRating]);

  useEffect(() => {
    (async () => {
      const newMovies = await fetchMovies(currentPage, currentRating);
      if (currentPage === 1) {
        setMovieList([...newMovies]);
      } else {
        setMovieList([...movieList, ...newMovies]);
      }
    })();
  }, [currentPage]);

  return movieList ? (
    <div className="container">
      <InfiniteScroll
        className="row"
        dataLength={movieList.length}
        next={() => {
          setCurrentPage(currentPage + 1);
        }}
        hasMore={true}
      >
        {movieList.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </InfiniteScroll>
    </div>
  ) : (
    <Spinner />
  );
}

export default MovieList;
