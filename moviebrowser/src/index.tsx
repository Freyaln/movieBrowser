import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      {/*  <Route path="TVShow/" element={<TVShow />} />*/}
      {/*  <Route path="ShowCard" element={<ShowCard />} />*/}
      {/*  <Route path="FetchShow/:ShowId" element={<ShowCardFetch />} />*/}
      {/*  <Route path="MovieCard" element={<MovieCard />} />*/}
      {/*  <Route path="FetchMovie/:MovieId" element={<MovieCardFetch />} />*/}
      {/*  <Route path="Movies" element={<Movies />} />*/}
      {/*  <Route path="SearchResults/:search" element={<SearchResults />} />*/}
      {/*  <Route path="Genres/:GenresId" element={<Genres />} />*/}
      {/*  <Route path="MoviesByGenre/:GenresId" element={<MoviesByGenre />} />*/}
      {/*  <Route path="*" element={*/}
      {/*    <main style={{ padding: "1rem" }}>*/}
      {/*      <p>There's nothing here!</p>*/}
      {/*    </main>*/}
      {/*  }*/}
      {/*  />*/}
      </Route>
    </Routes>
  </BrowserRouter >,
  document.getElementById('root')
);
