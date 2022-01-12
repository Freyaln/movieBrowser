import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './Movies.css';

const Movies = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [trending, setTrending] = useState([]);
    const [trending2, setTrending2] = useState([]);
    const [trending3, setTrending3] = useState([]);
    const [trendingGenre, setTrendingGenre] = useState([]);
    const [pendingTrending, setPendingTrending] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {
        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get('/trending/movie/week?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&page=1', { cache: 'reload' })
            .then((res) => {
                //settrending(JSON.stringify(res.data.results));
                setTrending(res.data.results);
                setPendingTrending(true);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get('/trending/movie/week?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&page=2', { cache: 'reload' })
            .then((res) => {
                //settrending(JSON.stringify(res.data.results));
                setTrending2(res.data.results);
                setPendingTrending(true);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get('/trending/movie/week?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&page=3', { cache: 'reload' })
            .then((res) => {
                //settrending(JSON.stringify(res.data.results));
                setTrending3(res.data.results);
                setPendingTrending(true);
            })
            .catch((error) => {
                console.log(error)
            })


        db.get('/genre/movie/list?&api_key=4d1a84bd8e2f776949378aaece646762&language=en-US', { cache: 'reload' })
            .then((res) => {
                setTrendingGenre(res.data.genres);
            })

    }, []);

    console.log(trending, trendingGenre)

    if (pendingTrending === true) {
        return (
            <main className="trending-list">
                {trending.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
                {trending2.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
                {trending3.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
            </main>
        )
    }
    else return (
        <p>NOPE</p>
    )


};







export default Movies;
