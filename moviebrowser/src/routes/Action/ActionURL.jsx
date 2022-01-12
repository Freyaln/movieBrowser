import { useParams } from "react-router-dom";

export default function ActionURL() {
    let params = useParams();

    return (
        <main>

            <h2>Title: {params.ActionId}</h2>;
        </main>
    )
}