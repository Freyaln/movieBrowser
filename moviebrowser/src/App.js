import './App.css';
import { Outlet, Link } from "react-router-dom";
import Genre from './routes/Genres/Genres';

function App() {
  return (
    <article>
      <h1>Netfrix</h1>
      <Genre />
      <Outlet />
    </article >
  );
}

export default App;
