import React, { FC, useEffect, useState } from 'react';
import { getMoviesByGenre } from '../../../data/Fetch/Fetch';
import ImageGrid, { DatasModel } from '../../../components/molecules/ImageGrid/ImageGrid';
import { useParams } from 'react-router-dom';
import './Movies.scss';
import {moviesGenresList} from "../../../data/DataLists/DataLists";

interface IdParam {
  linkParam: string;
}

const Movies: FC = () => {
  const [postersAndIdByGenre, setPostersAndIdByGenre] = useState<DatasModel[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const linkParam = useParams() as { linkParam: string };
  const searchParam = parseInt(linkParam.linkParam, 10);
  let genre;
  moviesGenresList.map((i) => i.id === linkParam.linkParam ? genre = i.name as string: false)

  useEffect(() => {
    const fetchByGenre = getMoviesByGenre(searchParam, page).then((fetchByGenre) => {
      setPostersAndIdByGenre(
        fetchByGenre.map((i: { id: string; poster_path: string }) => {
          return { id: i.id, img: i.poster_path };
        })
      );
      setLoaded(true);
    });
  }, [searchParam]);



    return  <ImageGrid className="__movies-posters" datas={postersAndIdByGenre} title={genre}/>;


};

export default Movies;
