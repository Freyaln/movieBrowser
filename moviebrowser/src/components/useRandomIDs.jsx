import Movies from "../routes/Movies/Movies";



let GENRE_ID_RANDOM = '';

export default function useRandomIDs() {

    const genreList = [
        [28, "action"],
        [12, "adventure"],
        [16, "animation"],
        [35, "comedy"],
        [80, "crime"],
        [99, "documentary"],
        [18, "drama"],
        [10751, "family"],
        [14, "fantasy"],
        [36, "history"],
        [27, "horror"],
        [10402, "music"],
        [9648, "mystery"],
        [10749, "romance"],
        [878, "science-fiction"],
        [10770, "TV Movie"],
        [53, "thriller"],
        [10752, "war"],
        [37, "western"]];


    const numberOfList = 3;
    const randomizationOfIds = genreList.sort(function () {
        return .5 - Math.random()
    });

    GENRE_ID_RANDOM = randomizationOfIds.slice(0, numberOfList);
    return GENRE_ID_RANDOM
};
