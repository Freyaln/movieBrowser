import { Link, Outlet } from "react-router-dom";
import GetMovieList from "../../data";

export default function ActionList() {



    return (
        <div>
            <main>
                <h2>Action list</h2>
                {/*  {GetMovieList.map(action => (
                    <Link to={`/Action/${action.original_title}`}
                        key={action.original_title}>
                        {"https://image.tmdb.org/t/p/w1280" + list.poster_path}
                        {action.title}  {" "}
                        {action.genres.name}
                    </Link>
                ))} */}
            </main>
            <Outlet />
        </div>
    )
}
