import React, {FC, useEffect, useRef, useState} from 'react';
import { getMoviesByGenre } from '../../../data/Fetch/Fetch';
import ImageGrid, { DatasModel } from '../../../components/molecules/ImageGrid/ImageGrid';
import {useParams} from 'react-router-dom';
import './Movies.scss';
import { moviesGenresList } from '../../../data/DataLists/DataLists';

interface IdParam {
  linkParam: string;
}

const Movies: FC = () => {
  const [postersAndIdByGenre, setPostersAndIdByGenre] = useState<DatasModel[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [history, setHistory] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const linkParam = useParams() as { linkParam: string };
  const searchParam = parseInt(linkParam.linkParam, 10);
  let genre: string | undefined;
  moviesGenresList.map((i) => (i.id === linkParam.linkParam ? (genre = i.name as string) : false));

  useEffect(() => {
     setHistory(window.history.length);
  },[linkParam])

    const handlePages = () => {
        setPage(page + 1);
    };

  useEffect(() => {
      if (history !== window.history.length) {
          const fetchByGenre = getMoviesByGenre(searchParam, 1).then((fetchByGenre) => {
              const values = fetchByGenre.map((i: { id: string; poster_path: string }) => {
                  return { id: i.id, img: i.poster_path };
              });
              setPostersAndIdByGenre(values)
        })
      }
      else {
          const fetchByGenre = getMoviesByGenre(searchParam, page).then((fetchByGenre) => {
              const values = fetchByGenre.map((i: { id: string; poster_path: string }) => {
                  return { id: i.id, img: i.poster_path };
              });
              if(history === window.history.length) {
                  setPostersAndIdByGenre([...postersAndIdByGenre, ...values])
              }
              setLoaded(true);
          });
      }

  }, [searchParam, page, genre]);
  return (
    <>
      <ImageGrid className="__movies__posters" datas={postersAndIdByGenre} title={genre} />
      <section className="__movies__posters__more__block">
        <button className="__movies__posters__more__btn" onClick={() => handlePages()}>
          Load more
        </button>
      </section>
    </>
  );
};

export default Movies;
