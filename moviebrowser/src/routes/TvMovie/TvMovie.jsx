import { useEffect, useState } from "react";
import axios from "axios";
import './TvMovie.css';

const TvMovie = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [tvMovie, setTvMovie] = useState([]);
    const [tvMovie2, setTvMovie2] = useState([]);
    const [pending, setPending] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {
        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get('/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10770', { cache: 'reload' })
            .then((res) => {
                setTvMovie(res.data.results);
                setPending(true);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get('/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=10770', { cache: 'reload' })
            .then((res) => {
                setTvMovie2(res.data.results);
                setPending(true);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    console.log(tvMovie)

    if (pending === true) {
        return (
            <main className="tvMovie-list">
                {tvMovie.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
                {tvMovie2.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
            </main>
        )
    }
    else return (
        <p>NOPE</p>
    )


};







export default TvMovie;