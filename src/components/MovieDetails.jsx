import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

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
        append_to_response: "credits",
      },
    });
    console.log(response.data.credits.crew);
    setMovie(response.data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return movie ? (
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
            {movie.credits.cast.map((actor, index) => {
              return <small key={index}> {actor.name} </small>;
            })}
            {movie.credits.crew.map((actor, index) => {
              return <small key={index}> {actor.name} </small>;
            })}
            <small>Runtime: {movie.runtime}mins</small>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );
}

export default MovieDetails;
