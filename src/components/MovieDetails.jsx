import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const moviePosterURL = "https://image.tmdb.org/t/p/original";
  const params = useParams();

  async function fetchMovie() {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${params.id}`,
      params: {
        api_key: "d31021610512441435829706f00ea294",
        language: "en-US",
      },
    });
    console.log(response.data);
    setMovie(response.data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    movie && (
      <>
        <div className="container">
          <div className="row">
            <div className="col moviePosterContainer movieDetailsCol">
              <img
                src={moviePosterURL + movie.poster_path}
                className="img-fluid listPoster"
                alt=""
              />
            </div>
            <div className="col movieInfoContainer movieDetailsCol">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <small>{movie.release_date}</small>
              <small>{movie.direction}</small>
              {movie.genres.map((genre, index) => {
                return <small key={index}> {genre.name} </small>;
              })}
              <small>Runtime: {movie.runtime}mins</small>
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default MovieDetails;
