import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import ShowCard from "../routes/ShowCard/ShowCard";
import TVShow from "../routes/TVShow/TVShow";

const ShowCardFetch = () => {

    let { ShowId } = useParams();
    let idShow = parseInt({ ShowId }.ShowId, 10);
    const API_URL = 'https://api.themoviedb.org/3';
    const [requestShowTitle, setRequestShowTitle] = useState([]);
    const [requestShowPoster, setRequestShowPoster] = useState([]);
    const [requestShowGenres, setRequestShowGenres] = useState([]);
    const [requestShowSynopsis, setRequestShowSynopsis] = useState([]);
    const [requestShowId, setRequestShowId] = useState([]);
    const [pendingShow, setPendingShow] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {

        const db = axios.create({
            baseURL: API_URL,
            timeout: 2000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get(`/tv/${idShow}?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US`, { cache: 'reload' })
            .then((res) => {
                setRequestShowTitle([res.data.original_title]);
                setRequestShowPoster([res.data.poster_path]);
                setRequestShowGenres(res.data.genres);
                setRequestShowSynopsis([res.data.overview]);
                setRequestShowId([res.data.id]);
                setPendingShow(true);
            })
            .then(() => {
                console.log(requestShowTitle)
            })
            .catch((error) => {
                console.log(error)
            })



    }, [idShow]);

    if (pendingShow === true) {
        return (
            <ShowCard
                requestShowPoster={requestShowPoster}
                requestShowTitle={requestShowTitle}
                requestShowGenres={requestShowGenres}
                requestShowSynopsis={requestShowSynopsis}
                requestShowId={requestShowId}
            />
        )
    }
    else {
        return (
            <p>Loading</p>
        )
    }

};

export default ShowCardFetch;