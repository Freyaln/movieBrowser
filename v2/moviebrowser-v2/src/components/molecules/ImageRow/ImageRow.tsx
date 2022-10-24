import * as React from 'react';
import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ImageRow.scss';
import Modal from '../Modal/Modal';

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
}

const ImageRow: FC<IListProps> = ({ className, datas }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const imgPath = 'https://image.tmdb.org/t/p/w500/';
  return (
    <section className="__imageRow">
      {datas.map((items) => (
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
  );
};

export default ImageRow;
