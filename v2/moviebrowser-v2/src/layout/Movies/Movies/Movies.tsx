import React, { FC, useEffect, useState } from 'react';
import { getMoviesByGenre } from '../../../data/Fetch/Fetch';
import ImageGrid, { DatasModel } from '../../../components/molecules/ImageGrid/ImageGrid';
import { useParams } from 'react-router-dom';
import './Movies.scss';

interface IdParam {
  linkParam: string;
}

const Movies: FC = () => {
  const [postersAndIdByGenre, setPostersAndIdByGenre] = useState<DatasModel[]>([]);
  const [page, setPage] = useState<number>(1);
  const linkParam = useParams() as { linkParam: string };
  const searchParam = parseInt(linkParam.linkParam, 10);

  useEffect(() => {
    const fetchByGenre = getMoviesByGenre(searchParam, page).then((fetchByGenre) => {
      setPostersAndIdByGenre(
        fetchByGenre.map((i: { id: string; poster_path: string }) => {
          return [...postersAndIdByGenre, { id: i.id, img: i.poster_path }];
        })
      );
    });
  }, [searchParam]);
  return <ImageGrid className="__movies-posters" datas={postersAndIdByGenre} />;
};

export default Movies;
