import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './MoviesByGenre.css';

const MoviesByGenre = () => {

    let { GenresId } = useParams();
    let id = parseInt({ GenresId }.GenresId, 10);
    const API_URL = 'https://api.themoviedb.org/3';
    const [requestGenre, setRequestGenre] = useState([]);
    const [pendingGenre, setPendingGenre] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {
        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get(`/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`, { cache: 'reload' })
            .then((res) => {
                setRequestGenre(res.data.results);
                setPendingGenre(true);
            })
            .catch((error) => {
                console.log(error)
            })

        console.log(id);

    }, [id]);

    if (pendingGenre === true) {
        return (
            <main className="trending-list">
                {requestGenre.map((list) =>
                    <Link to={`/MovieCard/${list.id}`} key={list.id}>
                        <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                    </Link>
                )}
            </main>
        )
    }
    else return (
        <p>NOPE</p>
    )


};







export default MoviesByGenre;
