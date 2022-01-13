import { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import axios from "axios";
import './Genres.css';

const Genre = () => {

    const API_URL = 'https://api.themoviedb.org/3';
    const [requestGenre, setRequestGenre] = useState([])
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
                setPending(true);
            })

    }, []);


    if (pending === true) {
        return (
            <div>
                <nav className='navbar'>
                    <ul>
                        <li><Link to="/TVShow" className='link'>TV Shows</Link>  {" "}</li>
                        <li><Link to="/Movies" className='link'>Movies</Link></li>
                        <li className='genres'>Categories
                            <ul className='submenu-content'>
                                {requestGenre.map((list) =>
                                    <li key={list.id}><Link to={`MoviesByGenre/${list.id}`} key={list.id} className="link">{list.name}</Link></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
    else {
        return <p> Nope </p>
    }

};

export default Genre;