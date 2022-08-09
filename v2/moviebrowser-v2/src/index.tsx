import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.scss';
import App from './App';
import Homepage from "./layout/Homepage/Homepage";
import Movies from "./layout/Movies/Movies/Movies";
import Series from "./layout/Series/Series/Series";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="browse" element={<Homepage />}/>
          {/*<Route path="browse/:Id" element={<Homepage />} />*/}
        <Route path="/browse/:linkParam" element={<Movies />} />
          <Route path="/browse/series" element={<Series />}/>
        <Route path="/series/popular" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
