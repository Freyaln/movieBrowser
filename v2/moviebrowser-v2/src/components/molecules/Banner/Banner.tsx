import React, { FC, useEffect, useState } from 'react';
import { DataPoster } from '../../../data/DataLists/Interface';
import Typo, { TextType } from '../../atoms/Typo/Typo';
import './Banner.scss';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../Modal/Modal';

interface IdParam {
  linkParam: string;
}

interface IBannerProps {
  movie: DataPoster[];
}

const Banner: FC<IBannerProps> = ({ movie }) => {
  const [banner, setBanner] = useState<DataPoster>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const imgPath = 'https://image.tmdb.org/t/p/w1280';
  const random = Math.floor(Math.random() * 19) + 1;
  useEffect(() => {
    setBanner(movie[random]);
  }, []);

  return (
    <>
      <section className="__banner-block">
        {banner && (
          <>
            <div className="__detail-layout">
              <img
                src={imgPath + banner.backdrop_path}
                key={uuidv4()}
                className="__detail-img"
                alt="movie poster"
                onClick={() => {
                  setIsOpen(true);
                  setId(banner.id);
                }}
              />
              <div className="__detail-text-block">
                <>
                  <Typo type={TextType.TEXT} className="__title">
                    {banner.title}
                  </Typo>
                  {/*<Typo type={TextType.TEXT} className="__text">*/}
                  {/*  {banner.overview}*/}
                  {/*</Typo>*/}
                </>
              </div>
            </div>
            <Modal isOpen={isOpen} datas={id} setIsOpen={setIsOpen} />
          </>
        )}
      </section>
    </>
  );
};

export default Banner;
