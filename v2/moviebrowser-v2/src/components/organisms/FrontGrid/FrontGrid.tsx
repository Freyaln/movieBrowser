import React, { FC, useEffect, useState } from 'react';
import { getBanner, getMovies } from '../../../data/Fetch/Fetch';
import ImageGrid, { DatasModel } from '../../molecules/ImageGrid/ImageGrid';
import { DataPoster } from '../../../data/DataLists/Interface';
import { useParams } from 'react-router-dom';
import Banner from '../../molecules/Banner/Banner';
import './FrontGrid.scss';
import Typo, { TextType } from '../../atoms/Typo/Typo';

const FrontGrid: FC = () => {
  const [popular, setPopular] = useState<DatasModel[]>([]);
  const [topRated, setTopRated] = useState<DatasModel[]>([]);
  const [upcoming, setUpcoming] = useState<DatasModel[]>([]);
  const [theatres, setTheatres] = useState<DatasModel[]>([]);
  const [listInfos, setListInfos] = useState<DataPoster[]>();
  const [flag, setFlag] = useState<boolean>(false);
  const linkParam = useParams() as { linkParam: string };
  const searchParam = parseInt(linkParam.linkParam, 10);

  useEffect(() => {
    const fetchPopular = getMovies('popular').then((fetchPopular) => {
      setPopular(
        fetchPopular.map((i: { id: string; poster_path: string }) => {
          return [...popular, { id: i.id, img: i.poster_path }];
        })
      );
    });
    const fetchTopRated = getMovies('top_rated').then((fetchTopRated) => {
      setTopRated(
        fetchTopRated.map((i: { id: string; poster_path: string }) => {
          return [...topRated, { id: i.id, img: i.poster_path }];
        })
      );
    });
    const fetchUpcoming = getMovies('upcoming').then((fetchUpcoming) => {
      setUpcoming(
        fetchUpcoming.map((i: { id: string; poster_path: string }) => {
          return [...upcoming, { id: i.id, img: i.poster_path }];
        })
      );
    });
    const fetchTheatres = getMovies('now_playing').then((fetchTheatres) => {
      setTheatres(
        fetchTheatres.map((i: { id: string; poster_path: string }) => {
          return [...theatres, { id: i.id, img: i.poster_path }];
        })
      );
    });
    const fetchList = getBanner(1).then((fetchList) => {
      setListInfos(fetchList);
    });

    popular && topRated && theatres && upcoming ? setFlag(true) : '';
  }, [searchParam, flag]);
  console.log(flag);

  return (
    <main className="__frontpage">
      {listInfos && <Banner movie={listInfos} />}
      <section className="__frontpage__categories__block">
        <Typo type={TextType.H2} className="__frontpage__categories__title">
          Popular
        </Typo>
        <ImageGrid className="__movies-posters" datas={popular} />
      </section>
      <section className="__frontpage__categories__block">
        <Typo type={TextType.H2} className="__frontpage__categories__title">
          Top rated
        </Typo>
        <ImageGrid className="__movies-posters" datas={topRated} />
      </section>
      <section className="__frontpage__categories__block">
        <Typo type={TextType.H2} className="__frontpage__categories__title">
          Upcoming
        </Typo>
        <ImageGrid className="__movies-posters" datas={upcoming} />
      </section>
      <section className="__frontpage__categories__block">
        <Typo type={TextType.H2} className="__frontpage__categories__title">
          In Theatres now
        </Typo>
        <ImageGrid className="__movies-posters" datas={theatres} />
      </section>
    </main>
  );
};

export default FrontGrid;
