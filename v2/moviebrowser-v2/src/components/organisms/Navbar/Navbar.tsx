import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { moviesGenresList } from '../../../data/DataLists/DataLists';
import './Navbar.scss';
import Typo, { TextType } from '../../atoms/Typo/Typo';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../../molecules/Modal/Modal';
import { Link } from 'react-router-dom';
import { DataList } from '../../../data/DataLists/Interface';

const titleLetters = ['T', 'h', 'e', '\u00a0\u00a0', 'S', 't', 'o', 'r', 'a', 'g', 'e'];

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navMoviesDatas, setNavMoviesDatas] = useState<DataList[]>([]);
  const [searchDatas, setSearchDatas] = useState<string>('');

  useEffect(() => {
    setNavMoviesDatas(
      moviesGenresList.map((t: { name: string; link: string; id: string }) => {
        return { name: t.name, link: t.link, id: t.id };
      })
    );
  }, [searchDatas]);

  return (
    <header className="__header">
      <Link to={'/home'}>
        <div className="__title-block">
          <p className="__title-text"></p>
        </div>
      </Link>
      <nav className="__navbar">
        <div className="__movies">
          <button type="button" onClick={() => setIsOpen(true)} className="__navbar-button">
            Movies
          </button>
          <Modal isOpen={isOpen} title="Genres" datas={navMoviesDatas} setIsOpen={setIsOpen} />
        </div>
        <div className="__series">
          <Link to={'/series'}>
            <button type="button" className="__navbar-button">
              Series
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
