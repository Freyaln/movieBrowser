import './App.css';
import { Outlet, Link } from "react-router-dom";
import Genre from './routes/Genres/Genres';
import tmdb from './images/tmdb.svg';
import Search from './routes/Search/Search';
import SearchResults from './routes/Search/SearchResults';

function App() {
  return (
    <article>
      <div className='placement'>
        <h1>Netfrix</h1>

      </div>
      <Genre />
      <main className='format'>

        <Outlet />

      </main>
      <Search />
      <img className='tmdb-logo' src={tmdb} />
    </article >
  );
}

export default App;
