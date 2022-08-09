import React, {FC, useEffect, useState} from 'react';
import {getSeries} from "../../../data/Fetch/Fetch";
import ImageGrid, {DatasModel} from "../../../components/molecules/ImageGrid/ImageGrid";
import {useParams} from "react-router-dom";
import './Series.scss';

interface IdParam {
    linkParam: string;
}

const randomList: string[] = ['popular', 'top_rated', 'airing_today']

const Series: FC = () => {
    const [postersAndId, setPostersAndId] = useState<DatasModel[]>([]);
    const linkParam = useParams() as { linkParam: string }
    const searchParam = linkParam.linkParam;

    const random = randomList[Math.floor(Math.random() * randomList.length)]
    useEffect(() => {
        const fetchPosters = getSeries(random).then((fetchPosters) => {
            setPostersAndId(
                fetchPosters.map((i: { id: string; poster_path: string }) => {
                    return [...postersAndId, { id: i.id, img: i.poster_path }];
                })
            );
        });
    }, []);
    return <ImageGrid className="__series-posters" datas={postersAndId} />;
};

export default Series;