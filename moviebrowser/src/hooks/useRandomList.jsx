import { useEffect, useState } from "react";
import axios from "axios";
import { sample } from "underscore";

export function useRandomList() {

    const [randomList, setRandomList] = useState([]);
    const [requestGenre, setRequestGenre] = useState([]);
    const [pending, setPending] = useState(false);
    const API_URL = 'https://api.themoviedb.org/3';

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
            setPending(true);
        })


    setRandomList(sample([requestGenre], 3))


    if (pending === true) {

        return { randomList, requestGenre }
    }

}