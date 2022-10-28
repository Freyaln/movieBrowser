import React, {FC, useEffect, useRef, useState} from 'react';
import ImageGrid, { DatasModel } from '../../components/molecules/ImageGrid/ImageGrid';
import {useParams} from 'react-router-dom';
import {searchMovie} from "../../data/Fetch/Fetch";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import './Search.scss';

interface IdParam {
    linkParam: string;
}

const Search: FC = () => {
    const [searchResults, setSearchResult] = useState<DatasModel[]>([]);
    const linkParam = useParams() as { linkParam: string };
    const searchParam = parseInt(linkParam.linkParam, 10);
    const [searchDatas, setSearchDatas] = useState<string>('');

    const handleSearchInput = (value: string) => {
       value ? setSearchDatas(value) : setSearchDatas('')
    }

    useEffect(() => {
        const fetchSearch = searchMovie(searchDatas).then((fetchSearch) => {
            const values = fetchSearch.map((i: {id: string; poster_path: string}) => {
                return {id: i.id, img: i.poster_path};
            })
            setSearchResult(values)
        })

    }, [searchDatas]);
    return (
        <main className='__main__search'>
            <SearchBar inputClass="__searchbar" onChange={(e) => handleSearchInput(e.currentTarget.value)}/>
            <ImageGrid className="__movies__posters" datas={searchResults}/>
        </main>
    );
};

export default Search;
