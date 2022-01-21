import _, { sample } from "underscore";
import { useState, useEffect } from "react";
import axios from "axios";
import RandomList from "./RandomList";


const FetchRandomGenres = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [firstRandomList, setFirstRandomList] = useState([]);
    const [requestGenre, setRequestGenre] = useState([]);
    const [pending, setPending] = useState(false);
    let underscoreSample;

    const db = axios.create({
        baseURL: API_URL,
        timeout: 1000,
        validateStatus: function (status) {
            return status >= 200 && status < 300;
        },
    });
    useEffect(() => {


        db.get('/genre/movie/list?&api_key=4d1a84bd8e2f776949378aaece646762&language=en-US', { cache: 'reload' })
            .then((res) => {
                setRequestGenre(res.data.genres);
                console.log(res);
                setPending(true);
                console.log(pending);
            })
    }, []);

    useEffect(() => {
        console.log(requestGenre)
        console.log(pending);
    }, [requestGenre, pending])

    useEffect(() => {
        underscoreSample = _.sample(requestGenre, 5);
        console.log(underscoreSample)
    }, [requestGenre])

    useEffect(() => {
        setFirstRandomList(underscoreSample)
    }, [requestGenre, underscoreSample])

    useEffect(() => {
        console.log(firstRandomList)
        console.log(firstRandomList[0])
    }, [firstRandomList])



    if (firstRandomList.length === 5)
        return (
            <div>
                <RandomList firstRandomList={firstRandomList[0]} />
                <RandomList firstRandomList={firstRandomList[1]} />
                <RandomList firstRandomList={firstRandomList[2]} />
                <RandomList firstRandomList={firstRandomList[3]} />
                <RandomList firstRandomList={firstRandomList[4]} />
            </div>
        )

    else return (<p>Loading...</p>)
};

export default FetchRandomGenres;

