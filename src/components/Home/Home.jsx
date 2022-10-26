import MovieList from "../MovieList";
import RatingFilter from "../RatingFilter";
import {useState} from 'react'


function Home(){
    const [movies, setMovies] = useState([]);
    const [rating, setRating] = useState(0);
    return(
        <>
            <RatingFilter
            rating={rating}
            setRating={setRating}
            />
            <MovieList movies={movies} setMovies={setMovies} rating={rating} />
        </>
    )
}

export default Home;