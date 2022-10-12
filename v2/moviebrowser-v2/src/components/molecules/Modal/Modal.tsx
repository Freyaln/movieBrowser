import { Dialog, Transition } from '@headlessui/react';
import React, { Dispatch, FC, Fragment, SetStateAction, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { DataList, DatasDetail } from '../../../data/DataLists/Interface';
import Typo, { TextType } from '../../atoms/Typo/Typo';
import { getMoviesDetail, getSeriesDetail } from '../../../data/Fetch/Fetch';
import './Modal.scss';
import Lists from '../Lists/Lists';
import { minToHours } from '../../../data/Hooks/Hooks';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  datas?: any;
  title?: string;
}

const Modal: FC<IModalProps> = ({ datas, title, isOpen, setIsOpen }) => {
  const [movieDetail, setMovieDetail] = useState<DatasDetail[] | undefined>([]);
  const [serieDetail, setSerieDetail] = useState<DatasDetail[] | undefined>([]);
  const location = useLocation();
  const Id = datas ? datas : 1;
  const imgPath = 'https://image.tmdb.org/t/p/w1280';
  const img =
    location.pathname === '/series'
      ? serieDetail?.map((i: DatasDetail) => i.poster_path)
      : movieDetail?.map((i: DatasDetail) => i.poster_path);

  function closeModal() {
    setIsOpen(false);
  }

  location.pathname === '/series'
    ? useEffect(() => {
        const fetchSerieDetail = getSeriesDetail(Id).then((fetchSerieDetail) => {
          setSerieDetail(fetchSerieDetail);
        });
      }, [datas])
    : useEffect(() => {
        const fetchMovieDetail = getMoviesDetail(Id).then((fetchMovieDetail) => {
          setMovieDetail(fetchMovieDetail);
        });
      }, [datas]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="__modal-container" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="__modal-backdrop" />
        </Transition.Child>

        <div className="__modal-content-container">
          <div className="__modal-content-position">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="__modal-content-typo">
                <Dialog.Title as="h3" className="__modal-content-title">
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  {datas && datas.length > 10 && (
                    <Lists
                      datas={datas}
                      className="__modal-content-text"
                      onClick={closeModal}
                    ></Lists>
                  )}
                </div>
                {movieDetail && movieDetail.length > 0 && (
                  <div className="__detail-block">
                    <Typo type={TextType.H2} className="__detail-title">
                      {movieDetail.map((i: DatasDetail) => i.title)}
                    </Typo>
                    <div className="__detail-img-block">
                      <img src={imgPath + img} className="__detail-img" />
                    </div>
                    <div className="__detail-text-block">
                      <div>
                        <Typo type={TextType.H2} className="__detail">
                          Genres :
                          <ul className="__text">
                            {movieDetail.map((i: DatasDetail) =>
                              i.genres?.map((i) => {
                                return <li key={uuidv4()}>{i.name}</li>;
                              })
                            )}
                          </ul>
                        </Typo>
                      </div>
                      <Typo type={TextType.H2} className="__detail">
                        Runtime:
                        <Typo type={TextType.TEXT} className="__text">
                          {movieDetail.map((i: DatasDetail) => minToHours(i.runtime))}
                        </Typo>
                      </Typo>
                      <Typo type={TextType.H2} className="__detail">
                        Release date:
                        <Typo type={TextType.TEXT} className="__text">
                          {movieDetail.map((i: DatasDetail) => i.release_date)}
                        </Typo>
                      </Typo>
                      <Typo type={TextType.H2} className="__detail">
                        Synopsys:
                        <Typo type={TextType.TEXT} className="__text">
                          {movieDetail.map((i: DatasDetail) => i.overview)}
                        </Typo>
                      </Typo>
                    </div>
                  </div>
                )}
                {serieDetail && serieDetail.length > 0 && (
                  <div className="__detail-block">
                    <Typo type={TextType.H2} className="__detail-title">
                      {serieDetail.map((i: DatasDetail) => i.title)}
                    </Typo>
                    <div className="__detail-img-block">
                      <img src={imgPath + img} className="__detail-img" />
                    </div>
                    <div className="__detail-text-block">
                      <div>
                        <Typo type={TextType.H2} className="__detail">
                          Genres :
                          <ul className="__text">
                            {serieDetail.map((i: DatasDetail) =>
                              i.genres?.map((i) => {
                                return <li key={uuidv4()}>{i.name}</li>;
                              })
                            )}
                          </ul>
                        </Typo>
                      </div>
                      <Typo type={TextType.H2} className="__detail">
                        Seasons:
                        <Typo type={TextType.TEXT} className="__text">
                          {serieDetail.map((i: DatasDetail) => i.number_of_seasons)}
                        </Typo>
                      </Typo>
                      <Typo type={TextType.H2} className="__detail">
                        Episodes:
                        <Typo type={TextType.TEXT} className="__text">
                          {serieDetail.map((i: DatasDetail) => i.number_of_episodes)}
                        </Typo>
                      </Typo>
                      <Typo type={TextType.H2} className="__detail">
                        Release date:
                        <Typo type={TextType.TEXT} className="__text">
                          {serieDetail.map((i: DatasDetail) => i.first_air_date)}
                        </Typo>
                      </Typo>
                      <Typo type={TextType.H2} className="__detail">
                        Synopsys:
                        <Typo type={TextType.TEXT} className="__text">
                          {serieDetail.map((i: DatasDetail) => i.overview)}
                        </Typo>
                      </Typo>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default Modal;
