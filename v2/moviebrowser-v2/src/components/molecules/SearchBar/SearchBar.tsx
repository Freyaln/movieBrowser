import React, {ChangeEvent, FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import './SearchBar.scss'

export interface ISearchBarProps {
    inputClass: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => any
}

const SearchBar: FC<ISearchBarProps> = ({inputClass,  onChange}) => {
return(
    <div className="__wrapper">
        <input type="text" placeholder='Search...' onChange={onChange} className={inputClass}/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="__search__icon"/>
    </div>
)
}

export default SearchBar;