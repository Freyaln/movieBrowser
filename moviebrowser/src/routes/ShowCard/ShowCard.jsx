import './ShowCard.css';
import ShowCardFetch from "../../components/FetchMovie";

const ShowCard = (props) => {

    const imgPath = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className="movie-details">
            <section className='movie'>

                <img className="poster" src={imgPath + props.requestShowPoster} alt={props.requestShowTitle} />
                <div className='post'>
                    <h4>Genres : </h4>
                    <ul className='genres-list'>
                        {props.requestShowGenres.map((list) =>
                            <li key={list.id}>{list.name}</li>)}
                    </ul>
                </div>
                <h5>Synopsis</h5>
                <p className='synopsis'>{props.requestShowSynopsis}</p>
            </section>
        </div>
    )
};

export default ShowCard;