/* import { useState } from "react";

const GetMovieList = () => {

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [moviePoster, setMoviePoster] = useState("");

    fetch('https://api.themoviedb.org/3/movie/550?api_key=4d1a84bd8e2f776949378aaece646762', { cache: 'reload' })
        .then(res => res.json())
        .then(list => { setTitle(list.original_title); setMoviePoster("https://image.tmdb.org/t/p/w1280" + list.poster_path); setGenre(list.genres.name) })

        .catch(err => console.log(err));
};

export default GetMovieList;
 */