import _, { sample } from "underscore";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageList, ImageListItem } from '@mui/material';


const FirstRandom = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const imgPath = "https://image.tmdb.org/t/p/w1280";
    const [firstRandomList, setFirstRandomList] = useState([]);
    const [requestGenre, setRequestGenre] = useState([]);
    const [pending, setPending] = useState(false);


    useEffect(() => {
        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });



        db.get('/genre/movie/list?&api_key=4d1a84bd8e2f776949378aaece646762&language=en-US', { cache: 'reload' })
            .then((res) => {
                setRequestGenre(res.data.genres);


            })
            .then(() => {
                setPending(true);
                console.log(requestGenre);
                const underscoreSample = _.sample(requestGenre, 3);
                setFirstRandomList(underscoreSample)
                console.log(firstRandomList);
            })
            .catch((error) => {
                console.log(error)
            })

        console.log(requestGenre);


    }, []);

    if (requestGenre.length === 2)
        return (
            <div>
                <h2>Top  movies</h2>

            </div>
        )

    else return (<p>Loading...</p>)
};

export default FirstRandom;

