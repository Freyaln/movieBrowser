import * as React from 'react';
import {FC, useRef} from 'react';
import Typo, { TextType } from '../../atoms/Typo/Typo';
import {Link} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {DataList} from "../../../data/DataLists/Interface";

export interface IListProps {
  title?: string;
  className: string;
  datas: DataList[];
}

const Lists: FC<IListProps> = ({ title, className, datas }) => {
  const linkParam = useRef();
  return (
    <>
      <Typo type={TextType.H2} className="text-xl">
        {title}
      </Typo>
      <ul className={className}>
        {datas.map((items, index) => (
          <li key={index}>
            <Link key={uuidv4()} to={items.id}>
              <Typo key={uuidv4()} type={TextType.H2} className="text-lg">
                {items.name}
              </Typo>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Lists;
