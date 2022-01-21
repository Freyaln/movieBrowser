import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ImageList, ImageListItem } from '@mui/material';


const RandomList = (props) => {

    const list = props.firstRandomList;
    const API_URL = 'https://api.themoviedb.org/3';
    const imgPath = "https://image.tmdb.org/t/p/w1280";
    const [listOne, setListOne] = useState([]);

    const db = axios.create({
        baseURL: API_URL,
        timeout: 1000,
        validateStatus: function (status) {
            return status >= 200 && status < 300;
        },
    });

    useEffect(() => {

        db.get(`/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&with_genres=${list.id}`)
            .then((res) => {
                setListOne(res.data.results);
                console.log(res);
            })
    }, [])

    if (listOne)
        return (
            <div>
                <h2>Top {list.name} movies</h2>
                <ImageList sx={{ width: 500, height: 180 }} cols={20} rowHeight={180}>
                    {listOne.map((list) =>
                        <ImageListItem key={list.id}>
                            <Link to={`/FetchMovie/${list.id}`} key={list.id}>
                                <img className="poster" src={imgPath + list.poster_path} alt='movie poster' />
                            </Link>
                        </ImageListItem>
                    )}
                </ImageList>
            </div>
        )

    else return (<p>Loading...</p>)
};


export default RandomList;

