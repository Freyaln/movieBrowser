import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import MovieList from './routes/MovieList/MovieList';
import ActionList from './routes/Action/Action';
import Action from './routes/Action/ActionURL';
import ComedyList from './routes/Comedy/Comedy';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="List" element={<MovieList />} />
        <Route path="Action" element={<ActionList />} >
          <Route path=":ActionId" element={<Action />} />
        </Route>
        <Route path="Comedy" element={<ComedyList />} />
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
