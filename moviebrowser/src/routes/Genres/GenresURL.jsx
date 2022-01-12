import { useParams } from "react-router-dom";

export default function GenresURL() {
    let params = useParams();

    return (
        <main>

            <h2>{params.GenresId}</h2>;
        </main>
    )
}