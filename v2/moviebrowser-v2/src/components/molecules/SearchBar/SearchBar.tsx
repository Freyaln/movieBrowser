import React, {ChangeEvent, FC} from 'react';

export interface ISearchBarProps {
    className: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => any
}

const SearchBar: FC<ISearchBarProps> = ({className, value, onChange}) => {
return(
    <div>
        <input type="text" value={value} onChange={onChange} />
    </div>
)
}

export default SearchBar;