import './MovieCard.css';
import MovieCardFetch from "../../components/FetchMovie";

const MovieCard = (props) => {

    const imgPath = "https://image.tmdb.org/t/p/w1280";
    return (
        <section className="movie-details">

            <img className="movie-poster" src={imgPath + props.requestMoviePoster} alt={props.requestMovieTitle} />
            <div className='movie-rating-genre'>
                <h4>Rating : </h4>
                <p>{props.requestMovieVote}/10</p>
                <h4>Genres : </h4>
                <ul className='movie-genres-list'>
                    {props.requestMovieGenres.map((list) =>
                        <li key={list.id}>{list.name}</li>)}
                </ul>
            </div>

            <div className='movie-synopsis'>
                <h5>Synopsis</h5>
                <p className='synopsis'>{props.requestMovieSynopsis}</p>
            </div>
        </section>
    )
};

export default MovieCard;