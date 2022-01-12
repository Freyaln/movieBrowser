import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Search = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [searchRes, setSearchRes] = useState([]);
    const [pendingSearch, setPendingSearch] = useState(false);
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    useEffect(() => {
        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        db.get('/search/movie?api_key=4d1a84bd8e2f776949378aaece646762&language=en-US&sort_by=popularity.desc&include_adult=false&total_results=20', { cache: 'reload' })
            .then((res) => {
                setSearchRes(res.data.results);
                setPendingSearch(true);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);
    console.log(searchRes);
    if (pendingSearch === true) {
        return (

            <section>
                <SearchResults searchRes={searchRes} imgPath={imgPath} pendingSearch={pendingSearch} />


            </section>
        )
    }
    else {
        <p>Something went wrong</p>
    }
};

export default Search;