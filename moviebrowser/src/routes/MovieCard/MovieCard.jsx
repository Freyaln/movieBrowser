import './MovieCard.css';
import MovieCardFetch from "../../components/FetchMovie";

const MovieCard = (props) => {

    const imgPath = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className="movie-details">
            <section className='movie'>

                <img className="poster" src={imgPath + props.requestMoviePoster} alt={props.requestMovieTitle} />
                <div className='post'>
                    <h4>Genres : </h4>
                    <ul className='genres-list'>
                        {props.requestMovieGenres.map((list) =>
                            <li key={list.id}>{list.name}</li>)}
                    </ul>
                </div>
                <h5>Synopsis</h5>
                <p className='synopsis'>{props.requestMovieSynopsis}</p>
            </section>
        </div>
    )
};

export default MovieCard;