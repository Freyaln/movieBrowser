import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImageList, ImageListItem } from '@mui/material';
import './Movies.css';

const Movies = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [requestAction, setRequestAction] = useState([]);
    const [requestRomance, setRequestRomance] = useState([]);
    const [requestAnime, setRequestAnime] = useState([]);
    const [trending, setTrending] = useState([]);
    const [pendingTrending, setPendingTrending] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";
    const genreList = [
        [28, "action"],
        [12, "adventure"],
        [16, "animation"],
        [35, "comedy"],
        [80, "crime"],
        [99, "documentary"],
        [18, "drama"],
        [10751, "family"],
        [14, "fantasy"],
        [36, "history"],
        [27, "horror"],
        [10402, "music"],
        [9648, "mystery"],
        [10749, "romance"],
        [878, "science-fiction"],
        [10770, "TV Movie"],
        [53, "thriller"],
        [10752, "war"],
        [37, "western"]];

    function rand(arr) {
        const numberOfList = 3;
        const randomizationOfIds = genreList.sort(function () {
            return .5 - Math.random()
        });

        const GENRE_ID_RANDOM = randomizationOfIds.slice(0, numberOfList);
        return GENRE_ID_RANDOM
    }

    useEffect(() => {

        rand(genreList)
        console.log(GENRE_ID_RANDOM)

        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get('/trending/movie/week?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&page=1', { cache: 'reload' })
            .then((res) => {
                setTrending(res.data.results);
                setPendingTrending(true);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get(`/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${GENRE_ID_RANDOM[0][0]}`, { cache: 'reload' })
            .then((res) => {
                setRequestAction(res.data.results);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get(`/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${GENRE_ID_RANDOM[1][0]}`, { cache: 'reload' })
            .then((res) => {
                setRequestRomance(res.data.results);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get(`/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${GENRE_ID_RANDOM[2][0]}`, { cache: 'reload' })
            .then((res) => {
                setRequestAnime(res.data.results);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    console.log(GENRE_ID_RANDOM)
    if (pendingTrending === true) {
        return (
            <div className="trending-list">
                <section className="movie-list">
                    <h2>Trending now</h2>
                    <ImageList sx={{ width: 500, height: 175 }} cols={20} rowHeight={180}>
                        {trending.map((list) =>
                            <ImageListItem key={list.id}>
                                <Link to={`/FetchMovie/${list.id}`} key={list.id}>
                                    <img className="poster" src={imgPath + list.poster_path} />
                                </Link>
                            </ImageListItem>
                        )}
                    </ImageList>
                    <h2>Top {GENRE_ID_RANDOM[0]} movies</h2>
                    <ImageList sx={{ width: 500, height: 180 }} cols={20} rowHeight={180}>
                        {requestAction.map((list) =>
                            <ImageListItem key={list.id}>
                                <Link to={`/FetchMovie/${list.id}`} key={list.id}>
                                    <img className="poster" src={imgPath + list.poster_path} />
                                </Link>
                            </ImageListItem>
                        )}
                    </ImageList>
                    <h2>Top {GENRE_ID_RANDOM[1]} movies</h2>
                    <ImageList sx={{ width: 500, height: 180 }} cols={20} rowHeight={180}>
                        {requestRomance.map((list) =>
                            <ImageListItem key={list.id}>
                                <Link to={`/FetchMovie/${list.id}`} key={list.id}>
                                    <img className="poster" src={imgPath + list.poster_path} />
                                </Link>
                            </ImageListItem>
                        )}
                    </ImageList>
                    <h2>Top {GENRE_ID_RANDOM[2]} movies</h2>
                    <ImageList sx={{ width: 500, height: 180 }} cols={20} rowHeight={180}>
                        {requestAnime.map((list) =>
                            <ImageListItem key={list.id}>
                                <Link to={`/FetchMovie/${list.id}`} key={list.id}>
                                    <img className="poster" src={imgPath + list.poster_path} />
                                </Link>
                            </ImageListItem>
                        )}
                    </ImageList>
                </section>
            </div >
        )
    }
    else return (
        <p>Loading... </p>
    )


};







export default Movies;
