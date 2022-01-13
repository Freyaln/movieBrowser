import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import './MovieCard.css';

const MovieCard = () => {

    let { MovieId } = useParams();
    let id = parseInt({ MovieId }.MovieId, 10);
    const API_URL = 'https://api.themoviedb.org/3/movie/${id}?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US';
    const [requestMovie, setRequestMovie] = useState([]);
    const [pendingMovie, setPendingMovie] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {
        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get(`/movie/${id}?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US`, { cache: 'reload' })
            .then((res) => {
                setRequestMovie(res.data.results);
                setPendingMovie(true);
            })
            .catch((error) => {
                console.log(error)
            })

        console.log(requestMovie, id);

    }, [id]);

    if (pendingMovie === true) {
        return (
            <main className="trending-list">
                {requestMovie.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} /> +
                    <h3 key={list.id}>{list.name}</h3> +
                    <p key={list.id}>{list.genres.name}</p>
                )}
            </main>
        )
    }
    else return (
        <p>NOPE</p>
    )


};

export default MovieCard;