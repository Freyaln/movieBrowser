import { useEffect, useState } from "react";
import axios from "axios";
import './Mystery.css';

const Mystery = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [mystery, setMystery] = useState([]);
    const [mystery2, setMystery2] = useState([]);
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

        db.get('/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648', { cache: 'reload' })
            .then((res) => {
                setMystery(res.data.results);
                setPending(true);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get('/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=9648', { cache: 'reload' })
            .then((res) => {
                setMystery2(res.data.results);
                setPending(true);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    console.log(mystery)

    if (pending === true) {
        return (
            <main className="mystery-list">
                {mystery.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
                {mystery2.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
            </main>
        )
    }
    else return (
        <p>NOPE</p>
    )


};







export default Mystery;