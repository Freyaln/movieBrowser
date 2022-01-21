import { useParams, Link } from "react-router-dom";
import { ImageList, ImageListItem } from '@mui/material';

const SearchResults = (props) => {

    const movie = props.searchResults;
    const search = props.searchParam;
    console.log(movie)
    console.log(search)
    const imgPath = "https://image.tmdb.org/t/p/w1280";

    return (

        <div>
            <h2>Search results for : {search} </h2>
            <ImageList sx={{ width: 500, height: 175 }} cols={20} rowHeight={200}>
                {movie.map((list) =>
                    <ImageListItem key={list.id}>
                        <Link to={`/FetchMovie/${list.id}`} key={list.id}>
                            <img className="poster" src={imgPath + list.poster_path} alt='movie poster' />
                        </Link>
                    </ImageListItem>
                )}
            </ImageList>
        </div>
    )
}

export default SearchResults;