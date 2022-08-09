import React, { FC, useEffect, useState } from 'react';
import { DatasDetail, DatasTrailer } from '../../../data/DataLists/Interface';
import Typo, { TextType } from '../../atoms/Typo/Typo';
import './BannerVideo.scss';

interface IdParam {
  linkParam: string;
}

interface IBannerProps {
  datas: DatasTrailer[];
  movie: DatasDetail | undefined;
}

const BannerVideo: FC<IBannerProps> = ({ datas, movie }) => {
  const yt = 'http://www.youtube.com/embed/';
  const imgPath = 'https://image.tmdb.org/t/p/w1280';
  return (
    <>
      <div className="__trailer-block">
        {datas.map((v) => v.type === 'Trailer' ? (
              <>
            <iframe
              src={`${yt}${datas.map((v) => v.key)}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`${movie?.title} videos`}
              className="__detail-video"
            />
              <div className="__detail-text-block">
                  <Typo type={TextType.TEXT} className="__text">
                      <blockquote>{movie?.overview}</blockquote>
                  </Typo>
              </div>
            </>
          ) : v.type === 'Teaser' ? (
              <>
              <iframe
                  src={`https://www.youtube.com/embed/${v.key}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={`${movie?.title} videos`}
                  className="__detail-video"
              />
              <div className="__detail-text-block">
                  <Typo type={TextType.TEXT} className="__text">
                      <blockquote>{movie?.overview}</blockquote>
                  </Typo>
              </div>
            </>
          ) : (
              <></>
          ))}
      </div>
    </>
  );
};

export default BannerVideo;
