import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import RatingFilter from "./components/RatingFilter";

function App() {
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState(0);
  return (
    <div className="App">
      <>
        <Header />
        <RatingFilter
          rating={rating}
          setRating={setRating}
        />
        <MovieList movies={movies} rating={rating} />
      </>
    </div>
  );
}

export default App;
