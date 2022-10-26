import {useState, useEffect} from 'react';
import axios from 'axios';

function MovieDetails(params){

        const [movie, setMovie] = useState(null);
        const moviePosterURL = "https://image.tmdb.org/t/p/original";

        useEffect(() => {
            const getMovie = async () => {
            const response = await axios({
                method:"GET",
                url:`https://api.themoviedb.org/3/movie/${params.id}`,
                params:{
                    api_key:"d31021610512441435829706f00ea294",
                    language:"en-US"
                }
            });

            setMovie(response.data);
            };
            getMovie();
        }, []);

    return(
        <>
            
        </>
    )
}

export default MovieDetails