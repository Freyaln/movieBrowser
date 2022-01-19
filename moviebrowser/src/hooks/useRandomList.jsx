import { useEffect, useState } from "react";
import axios from "axios";
import _, { sample } from "underscore";

export default function useRandomList() {

    const [randomList, setRandomList] = useState([]);
    const [requestGenre, setRequestGenre] = useState([]);
    const [pending, setPending] = useState(false);
    const API_URL = 'https://api.themoviedb.org/3';

    useEffect(() => {
        let fetchSuccess = false;
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
                console.log(res.data.genre)
            })
            .then(() => {
                if (!fetchSuccess) return;
                const underscoreSample = _.sample(requestGenre, 3);
                setRandomList(underscoreSample);
                console.log(underscoreSample);
            })

        fetchSuccess = true;




    })

    console.log(randomList, pending)

    if (pending === true) {
        console.log('pending = true')
        return { randomList, pending }
    }

}