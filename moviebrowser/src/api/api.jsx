import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from '../routes/MovieList/MovieList';


const API_URL = 'https://api.themoviedb.org/3';



function DatabaseConnect() {
    const [movies, setMovies] = useState([]);
    const [pending, setPending] = useState(false);

    useEffect(() => {
        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300; // default
            },
        });

        db.get('/trending/movie/week?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false', { cache: 'reload' })
            .then((res) => {
                console.log(res)
                setMovies(res.results);
                setPending(true);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    if (pending) return (
        <main>
            <MovieList movies={movies} />
        </main>
    )
    else return (
        <p>NOPE</p>
    )
}


export default DatabaseConnect;