import React, { FC, useEffect, useState } from 'react';
import { getSeries } from '../../../data/Fetch/Fetch';
import ImageGrid, { DatasModel } from '../../../components/molecules/ImageGrid/ImageGrid';
import { useParams } from 'react-router-dom';
import './Series.scss';

interface IdParam {
  linkParam: string;
}

const randomList: string[] = ['popular', 'top_rated', 'airing_today'];

const Series: FC = () => {
  const [postersAndId, setPostersAndId] = useState<DatasModel[]>([]);
  const linkParam = useParams() as { linkParam: string };
  const [page, setPage] = useState<number>(1);
  const searchParam = linkParam.linkParam;

  const handlePages = () => {
    console.log('click')
    setPage(page + 1);
  };


  useEffect(() => {
    const fetchPosters = getSeries('popular', page).then((fetchPosters) => {
      const values = fetchPosters.map((i: { id: string; poster_path: string }) => {
        return { id: i.id, img: i.poster_path };
      })
      setPostersAndId([...postersAndId, ...values]);
    });
  }, [page]);
  return (
  <>
  <ImageGrid className="__series-posters" datas={postersAndId} />
  <section className="__series__posters__more__block">
    <button className="__series__posters__more__btn" onClick={() => handlePages()}>
      Load more
    </button>
  </section>;
  </>
  )
};

export default Series;
