import axios from 'axios';
import {DatasDetail} from "../DataLists/Interface";

const db = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 2000,
    validateStatus: function (status) {
        return status >= 200 && status < 300;
    },
});

export async function getMovies(target: string) {

    try {
        const movies = await db.get(`/movie/${ target }?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US`)
        return movies.data.results
    }
    catch (error) {
        console.error(error);
    }
}

export async function getMoviesDetail(id: string): Promise<DatasDetail[] | undefined> {

    try {
        const movies = await db.get(`/movie/${ id }?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US`)
        return [movies.data]
    }
    catch (error) {
        console.error(error);
    }
}

export async function getMoviesByGenre(target: number, page: number) {

    try {
        const byGenre = await db.get(`/discover/movie?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${target}`)
        console.log(byGenre.data.results)
        return byGenre.data.results
    }
    catch (error) {
        console.error(error);
    }
}


export async function search(target: string){

    try {
        const search = await db.get(`/search/movie?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US&query=${target}`)
        return search.data.results
    }
    catch (error) {
        console.error(error);
    }
}

export async function getSeries(target: string) {

    try {
        const series = await db.get(`/tv/${target}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        return series.data.results
    }
    catch (error) {
        console.error(error);
    }
}

export async function getSeriesDetail(id: string): Promise<DatasDetail[] | undefined> {

    try {
        const movies = await db.get(`/tv/${ id }?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US`)
        return [movies.data]
    }
    catch (error) {
        console.error(error);
    }
}

export async function getFrontpageList(page: number) {

    try {
        const trailer = await db.get(`https://api.themoviedb.org/3/discover/movie?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
        return trailer.data.results
    }
    catch (error) {
        console.error(error);
    }
}

export async function getTrailer(id: string){

    try {
        const movies = await db.get(`/movie/${ id }/videos?api_key=${ process.env.REACT_APP_API_KEY }&language=en-US`)
        return movies.data.results
    }
    catch (error) {
        console.error(error);
    }
}