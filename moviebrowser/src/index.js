import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import TVShow from './routes/TVShow/TVShow';
import TVShowURL from './routes/TVShow/TVShowURL';
import Movies from './routes/Movies/Movies';
import MoviesURL from './routes/Movies/MoviesURL';
import Action from './routes/Action/Action';
import ActionURL from './routes/Action/ActionURL';
import Adventure from './routes/Adventure/Adventure';
import AdventureURL from './routes/Adventure/AdventureURL';
import Animation from './routes/Animation/Animation';
import AnimationURL from './routes/Animation/AnimationURL';
import Comedy from './routes/Comedy/Comedy';
import ComedyURL from './routes/Comedy/ComedyURL';
import Crime from './routes/Crime/Crime';
import CrimeURL from './routes/Crime/CrimeURL';
import Documentary from './routes/Documentary/Documentary';
import DocumentaryURL from './routes/Documentary/DocumentaryURL';
import Drama from './routes/Drama/Drama';
import DramaURL from './routes/Drama/DramaURL';
import Family from './routes/Family/Family';
import FamilyURL from './routes/Family/FamilyURL';
import Fantasy from './routes/Fantasy/Fantasy';
import FantasyURL from './routes/Fantasy/FantasyURL';
import History from './routes/History/History';
import HistoryURL from './routes/History/HistoryURL';
import Horror from './routes/Horror/Horror';
import HorrorURL from './routes/Horror/HorrorURL';
import Music from './routes/Music/Music';
import MusicURL from './routes/Music/MusicURL';
import Mystery from './routes/Mystery/Mystery';
import MysteryURL from './routes/Mystery/MysteryURL';
import Romance from './routes/Romance/Romance';
import RomanceURL from './routes/Romance/RomanceURL';
import ScienceFiction from './routes/ScienceFiction/ScienceFiction';
import ScienceFictionURL from './routes/ScienceFiction/ScienceFictionURL';
import Thriller from './routes/Thriller/Thriller';
import ThrillerURL from './routes/Thriller/ThrillerURL';
import TvMovie from './routes/TvMovie/TvMovie';
import TvMovieURL from './routes/TvMovie/TvMovieURL';
import War from './routes/War/War';
import WarURL from './routes/War/WarURL';
import Western from './routes/Western/Western';
import WesternURL from './routes/Western/WesternURL';
import Genres from './routes/Genres/Genres';
import GenresURL from './routes/Genres/GenresURL';
import TitleURL from './routes/Title/TitleURL';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="TVShow" element={<TVShow />}>
          <Route path=":TVShowId" element={<TVShowURL />} />
        </Route>
        <Route path="Movies" element={<Movies />} >
          <Route path=":MoviesId" element={<MoviesURL />} />
        </Route>
        <Route path="Genres" element={<Genres />}>
          <Route path=":GenresId" element={<GenresURL />} >
            <Route path=":TitleId" element={<TitleURL />} />
          </Route>
        </Route>
        <Route path="Action" element={<Action />} >
          <Route path=":ActionId" element={<ActionURL />} />
        </Route>
        <Route path="Adventure" element={<Adventure />} >
          <Route path=":AdventureId" element={<AdventureURL />} />
        </Route>
        <Route path="Animation" element={<Animation />} >
          <Route path=":AnimationId" element={<AnimationURL />} />
        </Route>
        <Route path="Comedy" element={<Comedy />} >
          <Route path=":ComedyId" element={<ComedyURL />} />
        </Route>
        <Route path="Crime" element={<Crime />} >
          <Route path=":CrimeId" element={<CrimeURL />} />
        </Route>
        <Route path="Documentary" element={<Documentary />} >
          <Route path=":DocumentaryId" element={<DocumentaryURL />} />
        </Route>
        <Route path="Drama" element={<Drama />} >
          <Route path=":DramaId" element={<DramaURL />} />
        </Route>
        <Route path="Family" element={<Family />} >
          <Route path=":FamilyId" element={<FamilyURL />} />
        </Route>
        <Route path="Fantasy" element={<Fantasy />} >
          <Route path=":FantasyId" element={<FantasyURL />} />
        </Route>
        <Route path="History" element={<History />} >
          <Route path=":HistoryId" element={<HistoryURL />} />
        </Route>
        <Route path="Horror" element={<Horror />} >
          <Route path=":HorrorId" element={<HorrorURL />} />
        </Route>
        <Route path="Music" element={<Music />} >
          <Route path=":MusicId" element={<MusicURL />} />
        </Route>
        <Route path="Mystery" element={<Mystery />} >
          <Route path=":MysteryId" element={<MysteryURL />} />
        </Route>
        <Route path="Romance" element={<Romance />} >
          <Route path=":RomanceId" element={<RomanceURL />} />
        </Route>
        <Route path="Science-fiction" element={<ScienceFiction />} >
          <Route path=":Science-fictionId" element={<ScienceFictionURL />} />
        </Route>
        <Route path="TV" element={<TvMovie />} >
          <Route path=":TVId" element={<TvMovieURL />} />
        </Route>
        <Route path="Thriller" element={<Thriller />} >
          <Route path=":ThrillerId" element={<ThrillerURL />} />
        </Route>
        <Route path="War" element={<War />} >
          <Route path=":WarId" element={<WarURL />} />
        </Route>
        <Route path="Western" element={<Western />} >
          <Route path=":WesternId" element={<WesternURL />} />
        </Route>
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
