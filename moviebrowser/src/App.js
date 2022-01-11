import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <article>
      <h1>Netfrix</h1>
      <nav>
        <Link to="/List">Movies List</Link> | {" "}
        <Link to="/Action">Action</Link> | {" "}
        <Link to="/Thriller">Thriller</Link> | {" "}
        <Link to="/Comedy">Comedy</Link> | {" "}
        <Link to="/Horror">Horror</Link> | {" "}
        <Link to="/Romance">Romance</Link> | {" "}
        <Link to="/Science-fiction">Science-fiction</Link>
      </nav>
      <Outlet />
    </article >
  );
}

export default App;
