import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <article>
      <h1>Netfrix</h1>
      <nav className='navbar'>
        <ul>
          <li><Link to="/TVShow" className='link'>TV Shows</Link>  {" "}</li>
          <li><Link to="/Movies" className='link'>Movies</Link></li>
          <li className='genres'>Categories
            <ul className='submenu-content'>
              <li><Link to="/Action" className='link'>Action</Link>  {" "}</li>
              <li><Link to="/Adventure" className='link'>Adventure</Link>  {" "}</li>
              <li><Link to="/Animation" className='link'>Animation</Link>  {" "}</li>
              <li><Link to="/Comedy" className='link'>Comedy</Link>  {" "}</li>
              <li><Link to="/Crime" className='link'>Crime</Link>  {" "}</li>
              <li><Link to="/Documentary" className='link'>Documentary</Link> {" "}</li>
              <li><Link to="/Drama" className='link'>Drama</Link>  {" "}</li>
              <li><Link to="/Family" className='link'>Family</Link>  {" "}</li>
              <li><Link to="/Fantasy" className='link'>Fantasy</Link>  {" "}</li>
              <li><Link to="/History" className='link'>History</Link>  {" "}</li>
              <li><Link to="/Horror" className='link'>Horror</Link>  {" "}</li>
              <li><Link to="/Music" className='link'>Music</Link>  {" "}</li>
              <li><Link to="/Mystery" className='link'>Mystery</Link>  {" "}</li>
              <li><Link to="/Romance" className='link'>Romance</Link>  {" "}</li>
              <li><Link to="/Science-fiction" className='link'>Science-fiction</Link>  {" "}</li>
              <li><Link to="/TV Movie" className='link'>TV Movie</Link>  {" "}</li>
              <li><Link to="/Thriller" className='link'>Thriller</Link>  {" "}</li>
              <li><Link to="/War" className='link'>War</Link>  {" "}</li>
              <li><Link to="/Western" className='link'>Western</Link>  {" "}</li>
            </ul>
          </li>
        </ul>
      </nav>
      <Outlet />
    </article >
  );
}

export default App;
