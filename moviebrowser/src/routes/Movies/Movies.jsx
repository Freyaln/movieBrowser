import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import './Movies.css';

const Movies = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [requestAction, setRequestAction] = useState([]);
    const [requestRomance, setRequestRomance] = useState([]);
    const [requestAnime, setRequestAnime] = useState([]);
    const [trending, setTrending] = useState([]);
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
                setTrending(res.data.results);
                setPendingTrending(true);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get(`/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`, { cache: 'reload' })
            .then((res) => {
                setRequestAction(res.data.results);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get(`/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`, { cache: 'reload' })
            .then((res) => {
                setRequestRomance(res.data.results);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get(`/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`, { cache: 'reload' })
            .then((res) => {
                setRequestAnime(res.data.results);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    if (pendingTrending === true) {
        return (
            <main className="trending-list">
                <div className="hr-list">
                    <h2>Trending now</h2>
                    <ImageList sx={{ width: 500, height: 150 }} cols={20} rowHeight={160}>
                        {trending.map((list) =>
                            <ImageListItem key={list.id}>
                                <Link to={`/MovieCard/${list.id}`} key={list.id}>
                                    <img className="poster" src={imgPath + list.poster_path} />
                                </Link>
                            </ImageListItem>
                        )}
                    </ImageList>
                    <h2>Top action movies</h2>
                    <ImageList sx={{ width: 500, height: 150 }} cols={20} rowHeight={160}>
                        {requestAction.map((list) =>
                            <ImageListItem key={list.id}>
                                <img className="poster" src={imgPath + list.poster_path} />
                            </ImageListItem>
                        )}
                    </ImageList>
                    <h2>Top romance movies</h2>
                    <ImageList sx={{ width: 500, height: 150 }} cols={20} rowHeight={160}>
                        {requestRomance.map((list) =>
                            <ImageListItem key={list.id}>
                                <img className="poster" src={imgPath + list.poster_path} />
                            </ImageListItem>
                        )}
                    </ImageList>
                    <h2>Top anime movies</h2>
                    <ImageList sx={{ width: 500, height: 150 }} cols={20} rowHeight={160}>
                        {requestAnime.map((list) =>
                            <ImageListItem key={list.id}>
                                <img className="poster" src={imgPath + list.poster_path} />
                            </ImageListItem>
                        )}
                    </ImageList>
                </div>
            </main>
        )
    }
    else return (
        <p>NOPE</p>
    )


};







export default Movies;
