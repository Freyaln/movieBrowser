import { useEffect, useState } from "react";
import axios from "axios";
import './Documentary.css';

const Documentary = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [documentary, setDocumentary] = useState([]);
    const [documentary2, setDocumentary2] = useState([]);
    const [pending, setPending] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {
        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get('/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99', { cache: 'reload' })
            .then((res) => {
                setDocumentary(res.data.results);
                setPending(true);
            })
            .catch((error) => {
                console.log(error)
            })

        db.get('/discover/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_genres=99', { cache: 'reload' })
            .then((res) => {
                setDocumentary2(res.data.results);
                setPending(true);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    console.log(documentary)

    if (pending === true) {
        return (
            <main className="documentary-list">
                {documentary.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
                {documentary2.map((list) =>
                    <img key={list.id} className="poster" src={imgPath + list.poster_path} />
                )}
            </main>
        )
    }
    else return (
        <p>NOPE</p>
    )


};







export default Documentary;