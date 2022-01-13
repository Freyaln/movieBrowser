import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import TVShow from './routes/TVShow/TVShow';
import MovieCard from './routes/MovieCard/MovieCard';
import Movies from './routes/Movies/Movies';
import MoviesByGenre from './routes/MoviesByGenre/MoviesByGenre';
import Genres from './routes/Genres/Genres';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="TVShow/" element={<TVShow />} />
        <Route path="MovieCard/:MovieId" element={<MovieCard />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="Genres/:GenresId" element={<Genres />} />
        <Route path="MoviesByGenre/:GenresId" element={<MoviesByGenre />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
        />
      </Route>
    </Routes>
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
