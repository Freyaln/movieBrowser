import { useParams } from "react-router-dom";
import { GetMovieList } from "../../data";

export default function Action() {
    let params = useParams();

    return (
        <main>

            <h2>Title: {params.ActionId}</h2>;
        </main>
    )
}