import React, { FC, useEffect, useState } from 'react';
import { getBanner, getMovies } from '../../../data/Fetch/Fetch';
import ImageRow, { DatasModel } from '../../molecules/ImageRow/ImageRow';
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
        const values = fetchPopular.map((i: { id: string; poster_path: string }) => {
            return { id: i.id, img: i.poster_path };
        })
        setPopular(values);
    });
    const fetchTopRated = getMovies('top_rated').then((fetchTopRated) => {
      const values = fetchTopRated.map((i: { id: string; poster_path: string }) => {
        return { id: i.id, img: i.poster_path };
      })
      setTopRated(values);
    });
    const fetchUpcoming = getMovies('upcoming').then((fetchUpcoming) => {
      const values = fetchUpcoming.map((i: { id: string; poster_path: string }) => {
        return { id: i.id, img: i.poster_path };
      })
      setUpcoming(values);
    });
    const fetchTheatres = getMovies('now_playing').then((fetchTheatres) => {
      const values = fetchTheatres.map((i: { id: string; poster_path: string }) => {
        return { id: i.id, img: i.poster_path };
      })
      setTheatres(values);
    });
    const fetchList = getBanner(1).then((fetchList) => {
      setListInfos(fetchList);
    });

    popular && topRated && theatres && upcoming ? setFlag(true) : '';
  }, [searchParam, flag]);

  return (
    <main className="__frontpage">
      {listInfos && <Banner movie={listInfos} />}
      <section className="__frontpage__categories__block">
        <Typo type={TextType.H2} className="__frontpage__categories__title">
          Popular
        </Typo>
        <ImageRow className="__movies-posters" datas={popular} />
      </section>
      <section className="__frontpage__categories__block">
        <Typo type={TextType.H2} className="__frontpage__categories__title">
          Top rated
        </Typo>
        <ImageRow className="__movies-posters" datas={topRated} />
      </section>
      <section className="__frontpage__categories__block">
        <Typo type={TextType.H2} className="__frontpage__categories__title">
          Upcoming
        </Typo>
        <ImageRow className="__movies-posters" datas={upcoming} />
      </section>
      <section className="__frontpage__categories__block">
        <Typo type={TextType.H2} className="__frontpage__categories__title">
          In Theatres now
        </Typo>
        <ImageRow className="__movies-posters" datas={theatres} />
      </section>
    </main>
  );
};

export default FrontGrid;
