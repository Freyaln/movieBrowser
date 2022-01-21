import axios from "axios";
import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import './Search.css';

const Search = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [searchParam, setSearchParam] = useState('');
    const [url, setUrl] = useState(`/search/movie?api_key=4d1a84bd8e2f776949378aaece646762&query=${searchParam}`, { cache: 'reload' })
    const [searchResults, setSearchResults] = useState([]);



    useEffect(() => {

        const db = axios.create({
            baseURL: API_URL,
            timeout: 1000,
            validateStatus: function (status) {
                return status >= 200 && status < 300;
            },
        });

        (async () => {
            const { data: { results } } = await db.get(url);
            setSearchResults(results);
        })();
        console.log(searchParam);
        console.log(searchResults);
    }, [url]);

    if (searchResults <= 0) {
        return (
            <div>
                <form onChange={() => setUrl(`/search/movie?api_key=4d1a84bd8e2f776949378aaece646762&query=${searchParam}`)}>
                    <label htmlFor="search">
                        <span className="hidden">Search movies</span>
                    </label>
                    <input
                        label="Movie name"
                        placeholder="Search here"
                        value={searchParam}
                        onChange={e => setSearchParam(e.target.value)} />
                </form>
            </div>
        )
    }
    else {
        return (

            <div>
                <form onChange={() => setUrl(`/search/movie?api_key=4d1a84bd8e2f776949378aaece646762&query=${searchParam}`)}>
                    <label htmlFor="search">
                        <span className="hidden">Search movies</span>
                    </label>
                    <input
                        label="Movie name"
                        placeholder="Search here"
                        value={searchParam}
                        onChange={e => setSearchParam(e.target.value)} />
                </form>
                <SearchResults searchParam={searchParam} />
                <SearchResults searchResults={searchResults[0]} />
                <SearchResults searchResults={searchResults[1]} />
                <SearchResults searchResults={searchResults[2]} />
                <SearchResults searchResults={searchResults[3]} />
                <SearchResults searchResults={searchResults[4]} />
                <SearchResults searchResults={searchResults[5]} />
                <SearchResults searchResults={searchResults[6]} />
                <SearchResults searchResults={searchResults[7]} />
                <SearchResults searchResults={searchResults[8]} />
                <SearchResults searchResults={searchResults[9]} />
                <SearchResults searchResults={searchResults[10]} />
                <SearchResults searchResults={searchResults[11]} />
                <SearchResults searchResults={searchResults[12]} />
                <SearchResults searchResults={searchResults[13]} />
                <SearchResults searchResults={searchResults[14]} />
                <SearchResults searchResults={searchResults[15]} />
                <SearchResults searchResults={searchResults[16]} />
                <SearchResults searchResults={searchResults[17]} />
                <SearchResults searchResults={searchResults[18]} />
                <SearchResults searchResults={searchResults[19]} />
                <SearchResults searchResults={searchResults[20]} />
            </div>


        )
    }
};

export default Search;