import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImageList, ImageListItem } from '@mui/material';
import RandomList from "../../components/RandomList";
import './Movies.css';
import FetchRandomGenres from "../../components/FetchRandomGenres";

const Movies = (props) => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [randomOne, setRandomOne] = useState([]);
    const [randomTwo, setRandomTwo] = useState([]);
    const [randomThree, setRandomThree] = useState([]);
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

    }, []);

    if (pendingTrending === true) {
        return (
            <div className="trending-list">
                <section className="movie-list">
                    <h2>Trending now</h2>
                    <ImageList sx={{ width: 500, height: 175 }} cols={20} rowHeight={200}>
                        {trending.map((list) =>
                            <ImageListItem key={list.id}>
                                <Link to={`/FetchMovie/${list.id}`} key={list.id}>
                                    <img className="poster" src={imgPath + list.poster_path} alt='movie poster' />
                                </Link>
                            </ImageListItem>
                        )}
                    </ImageList>
                    <FetchRandomGenres />
                </section>
            </div >
        )
    }
    else return (
        <p>Loading... </p>
    )


};







export default Movies;
