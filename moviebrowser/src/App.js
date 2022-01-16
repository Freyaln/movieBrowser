import './App.css';
import { Outlet, Link } from "react-router-dom";
import Genre from './routes/Genres/Genres';
import tmdb from './images/tmdb.svg';

function App() {
  return (
    <article>
      <div className='placement'>
        <h1>Netfrix</h1>
        <img className='tmdb-logo' src={tmdb} />
      </div>
      <Genre />
      <main className='format'>

        <Outlet />
      </main>
    </article >
  );
}

export default App;
