import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Dropdown.scss';
import {Link} from "react-router-dom";
import {DataList} from "../../../data/DataLists/Interface";

interface ISelectProps {
  defaultValue?: string;
  className?: string;
  options?: DataList[];
  label: string
}

const Dropdown: FC<ISelectProps> = ({defaultValue, className = '', options, label }) => {
  return (
    <label>
      {label}
      <select className={className} value={defaultValue}>
        {options &&
          options.map((option) => (
            <Link key={uuidv4()} to={option.link}>
              <option key={uuidv4()} value={option.name}>
                {option.name}
              </option>
            </Link>
          ))}
      </select>
    </label>
  );
};

export default Dropdown;
