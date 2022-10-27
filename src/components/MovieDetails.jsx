import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const moviePosterURL = "https://image.tmdb.org/t/p/original";
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${params.id}`,
        params: {
          api_key: "d31021610512441435829706f00ea294",
          language: "en-US",
        },
      });

      setMovie(response.data);
    };
    getMovie();
  }, []);

  return (
    movie && (
      <>
        <div className="container">
          <div className="col">
            <img
              src={moviePosterURL + movie.poster_path}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col">
            <h1>{movie.title}</h1>
          </div>
        </div>
      </>
    )
  );
}

export default MovieDetails;
