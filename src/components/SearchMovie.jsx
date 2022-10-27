import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import Spinner from "./Spinner";

function SearchMovie() {
  const [foundMovies, setFoundMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const fetchMovies = () => {
    return axios({
      url: `https://api.themoviedb.org/3/search/movie?`,
      method: "GET",
      params: {
        api_key: `d31021610512441435829706f00ea294`,
        language: `en-US`,
        sort_by: `popularity.desc`,
        include_adult: false,
        include_video: false,
        with_watch_monetization_types: `flatrate`,
        append_to_response: "credits",
        query: movieName,
      },
    }).then((result) => {
      setFoundMovies(result.data.results);
    });
  };

  useEffect(() => {
    fetchMovies();
  }, [movieName]);

  return foundMovies ? (
    <div className="container d-flex flex-column align-items-center">
      <h5 className="textStar text-white mt-3">Search a Movie</h5>
      <Form className="d-flex w-25">
        <Form.Control
          type="search"
          placeholder="Start typing..."
          className="me-2"
          aria-label="Search"
          onChange={(e) => setMovieName(e.target.value)}
        />
      </Form>
      <div className="row">
        {foundMovies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  ) : (
    <Spinner />
  );
}

export default SearchMovie;
