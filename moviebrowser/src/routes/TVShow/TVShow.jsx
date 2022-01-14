import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import './TVShow.css';
import ShowCardFetch from "../../components/FetchShow";

const TVShow = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [trending, setTrending] = useState([]);
    const [requestTopRated, setRequestTopRated] = useState([]);
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

        db.get('/tv/popular?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&page=1', { cache: 'reload' })
            .then((res) => {
                setTrending(res.data.results);
                setPendingTrending(true);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get('/tv/top_rated?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&page=1', { cache: 'reload' })
            .then((res) => {
                setRequestTopRated(res.data.results);
                setPendingTrending(true);
            })
            .catch((error) => {
                console.log(error)
            })


    }, []);

    console.log(trending)

    if (pendingTrending === true) {
        return (
            <main className="show-list">
                <div className="hr-list">
                    <h2>Trending now</h2>
                    <ImageList sx={{ width: 500, height: 180 }} cols={20} rowHeight={180}>
                        {trending.map((list) =>
                            <ImageListItem key={list.id}>
                                <Link to={`/FetchShow/${list.id}`}>
                                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                                </Link>

                            </ImageListItem>
                        )}
                    </ImageList>
                    <h2>Top rated shows</h2>
                    <ImageList sx={{ width: 500, height: 180 }} cols={20} rowHeight={180}>
                        {requestTopRated.map((list) =>
                            <ImageListItem key={list.id}>
                                <Link to={`/FetchShow/${list.id}`}>
                                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                                </Link>

                            </ImageListItem>
                        )}
                    </ImageList>
                </div>
            </main >
        )
    }
    else return (
        <p>Loading... </p>
    )


};

export default TVShow;