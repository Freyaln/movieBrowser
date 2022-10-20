import * as React from 'react';
import {FC, useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import Modal from '../Modal/Modal';
import Typo, {TextType} from "../../atoms/Typo/Typo";
import './ImageGrid.scss';

interface IdParam {
  id: string;
}

export interface DatasModel {
    img: string;
    id: string;
}

export interface IListProps {
  className: string;
  datas: DatasModel[];
  title?: string;
}

const ImageGrid: FC<IListProps> = ({ className, datas , title}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const imgPath = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
        <section className='__movies__genre__block'>
            <Typo type={TextType.H2} className='__movies__genre'>{title}</Typo>
        </section>
      <section className="__imageGrid">
        {datas?.map((items) => (
          <img
            src={imgPath + items.img}
            key={uuidv4()}
            className={className}
            alt="movie poster"
            onClick={() => {
              setIsOpen(true);
              setId(items.id);
            }}
          />
        ))}
        <Modal isOpen={isOpen} datas={id} setIsOpen={setIsOpen} />
      </section>
    </>
  );
};

export default ImageGrid;
