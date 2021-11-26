import React, {useReducer} from "react";
import {movieReducer} from "./movieReducer";
import {MovieContext} from "./movieContext";
import {
    CLEAR_LAST_MOVIE,
    CLEAR_MOVIES,
    GET_MOVIE,
    GET_POPULAR,
    GET_TRAILER,
    SEARCH_MOVIES,
    SET_LOADING
} from "../types";
import axios from "axios";


const KEY = process.env.REACT_APP_API_KEY;
const SEARCH = 'https://api.themoviedb.org/3/';


export const MovieState = ({children}) => {

    const initialState = {
        movie: {},
        movies: [],
        trailer: [],
        popular: [],
        loading: true
    }

    const [state, dispatch] = useReducer(movieReducer, initialState);

    const setLoading = (loading) => {
        dispatch({
            type: SET_LOADING,
            loading
        })
    }

    const clearMovie = () => {
        dispatch({
            type: CLEAR_LAST_MOVIE
        })
    }

    const searchMovies = (value) => {

        setLoading(true);

        axios.get(
            SEARCH + `search/movie?api_key=${KEY}&query=${value}&language=en-US`
        ).then((response)=> {
            return new Promise((resolve) => {
                dispatch({
                    type: SEARCH_MOVIES,
                    payload: response.data,
                });
                setTimeout(() => {
                    resolve();
                }, 1000)
            });
        }).then(() => {
            setLoading(false);
        })
    }



    const getMovie = id => {

        setLoading(true);

        axios.get(
            SEARCH + `movie/${id}?api_key=${KEY}&language=en-US`
        ).then(response => {

            return new Promise(resolve => {
                dispatch({
                    type: GET_MOVIE,
                    payload: response.data
                })

                setTimeout(() => {
                    resolve()
                }, 2000);
            })
        }).then(() => setLoading(false));
    }

    const getTrailer = id => {
        console.log('get id',id)

        setLoading(true);
        axios.get(
            SEARCH + `movie/${id}/videos?api_key=${KEY}&language=en-US`
        ).then(response => {

            // console.log('ответ',response.data.results)

            const videoKeys = [];
            response.data.results.map((video) => {
                return videoKeys.push(video.key)
            })

            return new Promise(resolve => {
                dispatch({
                    type: GET_TRAILER,
                    payload: videoKeys
                })

                setTimeout(() => {
                    resolve()
                }, 500);
            })

        }).then(() => setLoading(false));
    }

    const getPopular = () => {
        // console.log('get id',id)

        setLoading(true);

        axios.get(
            SEARCH + `movie/popular?api_key=${KEY}&language=en-US&page=1`
        ).then(response => {

            // console.log('популярное',response.data.results)

            return new Promise(resolve => {
                dispatch({
                    type: GET_POPULAR,
                    payload: response.data
                })

                setTimeout(() => {
                    resolve()
                }, 1000);
            })

        }).then(() => setLoading(false));
    }





    const clearSearch = () => {
        dispatch({
            type: CLEAR_MOVIES
        })
    }


    const {movie, movies, loading, trailer, popular} = state;

    return (
        <MovieContext.Provider value={{
            searchMovies, getMovie, getTrailer, getPopular, setLoading, clearSearch, clearMovie, movie, movies, loading, trailer, popular
        }}>
            {children}
        </MovieContext.Provider>
    )
}