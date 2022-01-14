import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../routes/MovieCard/MovieCard";
import Movies from "../routes/Movies/Movies";

const MovieCardFetch = () => {

    let { MovieId } = useParams();
    let idMovie = parseInt({ MovieId }.MovieId, 10);
    const API_URL = 'https://api.themoviedb.org/3';
    const [requestMovieTitle, setRequestMovieTitle] = useState([]);
    const [requestMoviePoster, setRequestMoviePoster] = useState([]);
    const [requestMovieGenres, setRequestMovieGenres] = useState([]);
    const [requestMovieSynopsis, setRequestMovieSynopsis] = useState([]);
    const [requestMovieId, setRequestMovieId] = useState([]);
    const [pendingMovie, setPendingMovie] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {

        const db = axios.create({
            baseURL: API_URL,
            timeout: 2000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get(`/movie/${idMovie}?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US`, { cache: 'reload' })
            .then((res) => {
                setRequestMovieTitle([res.data.original_title]);
                setRequestMoviePoster([res.data.poster_path]);
                setRequestMovieGenres(res.data.genres);
                setRequestMovieSynopsis([res.data.overview]);
                setRequestMovieId([res.data.id]);
                setPendingMovie(true);
            })
            .then(() => {
                console.log(requestMovieTitle)
            })
            .catch((error) => {
                console.log(error)
            })



    }, [idMovie]);

    if (pendingMovie === true) {
        return (
            <MovieCard
                requestMoviePoster={requestMoviePoster}
                requestMovieTitle={requestMovieTitle}
                requestMovieGenres={requestMovieGenres}
                requestMovieSynopsis={requestMovieSynopsis}
                requestMovieId={requestMovieId}
            />
        )
    }
    else {
        return (
            <p>Loading</p>
        )
    }

};

export default MovieCardFetch;