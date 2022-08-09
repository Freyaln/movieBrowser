import React, {FC, useEffect, useState} from 'react';
import {getFrontpageList, getMovies, getTrailer} from '../../../data/Fetch/Fetch';
import ImageGrid, {DatasModel} from '../../molecules/ImageGrid/ImageGrid';
import {DatasDetail, DatasTrailer} from '../../../data/DataLists/Interface';
import {useParams} from 'react-router-dom';
import BannerVideo from '../../molecules/BannerVideo/BannerVideo';
import Typo, {TextType} from "../../atoms/Typo/Typo";
import {getRandomId} from "../../../data/Hooks/Hooks";

const randomList: string[] = ['popular', 'top_rated', 'upcoming'];

const FrontGrid: FC = () => {
  const [postersAndId, setPostersAndId] = useState<DatasModel[]>([]);
  const [listInfos, setListInfos] = useState<DatasDetail[]>([]);
  const [trailerId, setTrailerId] = useState<DatasDetail>();
  const [trailerAvailable, setTrailerAvailable] = useState<DatasTrailer[]>([]);
  const [trailer, setTrailer] = useState<DatasDetail>();
  const [flag, setFlag] = useState<boolean>(true);
  const linkParam = useParams() as { linkParam: string };
  const searchParam = parseInt(linkParam.linkParam, 10);
  const page = Math.floor(Math.random() * 10 +1);
  const random = randomList[Math.floor(Math.random() * randomList.length)];



  useEffect(() => {
    const fetchPosters = getMovies(random).then((fetchPosters) => {
      setPostersAndId(
        fetchPosters.map((i: { id: string; poster_path: string }) => {
          return [...postersAndId, { id: i.id, img: i.poster_path }];
        })
      );
    });
    const fetchList = getFrontpageList(page).then((fetchList) => {
      setListInfos(fetchList)
      setFlag(true)
    })
  }, [searchParam]);

  useEffect(() => {
    if (listInfos) {
    setTrailerId(listInfos[Math.floor(Math.random() * listInfos.length)])
    }
  }, [flag])


  // TODO FIX THE HOOK
  // const randomizeFrontOutput = getRandomId(listInfos);
  // if (listInfos) {
  //   console.log(test)
  // }

  useEffect(() => {
    if (trailerId) {
      const id = trailerId && trailerId.id;
      const fetchTrailer = getTrailer(id as string).then((fetchTrailer) => {
        setTrailerAvailable(fetchTrailer);
      });
    }
  },[trailerId])

  useEffect(() => {
    if (trailerAvailable && trailerAvailable.map((t) => t.type === 'Trailer')) {
      console.log('Datas collected')
      setFlag(false)
    }
    else if(trailerAvailable && !trailerAvailable.map((t) => t.type === 'Trailer')) {
      console.log('Doesn"t include trailer')
    }
  },[])

  // TODO RÉGLER LE RE-RENDER DE L OVERVIEW

  if (trailerAvailable && trailerId) {
  return(
  <>
    <BannerVideo datas={trailerAvailable} movie={trailerId}/>
    <ImageGrid className="__movies-posters" datas={postersAndId} />
  </>
  );
  }
  else {
    return (
        <Typo type={TextType.H2} className='__404'> Loading ... </Typo>
    )
  }

};

export default FrontGrid;