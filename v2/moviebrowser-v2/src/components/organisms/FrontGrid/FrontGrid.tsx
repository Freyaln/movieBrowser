import React, { FC, useEffect, useState } from 'react';
import { getBanner, getMovies } from '../../../data/Fetch/Fetch';
import ImageGrid, { DatasModel } from '../../molecules/ImageGrid/ImageGrid';
import { DataPoster, DatasDetail } from '../../../data/DataLists/Interface';
import { useParams } from 'react-router-dom';
import Banner from '../../molecules/Banner/Banner';
import './FrontGrid.scss';

const randomList: string[] = ['popular', 'top_rated', 'upcoming'];

const FrontGrid: FC = () => {
  const [postersAndId, setPostersAndId] = useState<DatasModel[]>([]);
  const [listInfos, setListInfos] = useState<DataPoster[]>();
  const [flag, setFlag] = useState<boolean>(true);
  const linkParam = useParams() as { linkParam: string };
  const searchParam = parseInt(linkParam.linkParam, 10);
  const random = randomList[Math.floor(Math.random() * randomList.length)];

  useEffect(() => {
    const fetchPosters = getMovies(random).then((fetchPosters) => {
      setPostersAndId(
        fetchPosters.map((i: { id: string; poster_path: string }) => {
          return [...postersAndId, { id: i.id, img: i.poster_path }];
        })
      );
    });
    const fetchList = getBanner(1).then((fetchList) => {
      setListInfos(fetchList);
      setFlag(true);
    });
  }, [searchParam, flag]);
  console.log(listInfos);

  return (
    <main className="__frontpage">
      {listInfos && <Banner movie={listInfos} />}
      <ImageGrid className="__movies-posters" datas={postersAndId} />
    </main>
  );
};

export default FrontGrid;
