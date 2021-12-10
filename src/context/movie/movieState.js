import React, {useReducer} from "react";
import {movieReducer} from "./movieReducer";
import {MovieContext} from "./movieContext";
import {
    CLEAR_MOVIES,
    GET_MOVIE,
    GET_TRAILER,
    SEARCH_MOVIES,
    SET_LOADING
} from "../types";
import axios from "axios";


const KEY = process.env.REACT_APP_API_KEY;
const SEARCH = process.env.REACT_APP_SEARCH_MOVIE;

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

    const searchMovies = (value) => {

        setLoading(true);

        axios.get(
            SEARCH + `search/movie?api_key=${KEY}&query=${value}&language=en-US`
        ).then(response=> {

            return new Promise((resolve) => {
                dispatch({
                    type: SEARCH_MOVIES,
                    payload: response.data,
                });

                setTimeout(() => {
                    resolve();
                }, 2000)
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
                }, 1000);
            })
        }).then(() => setLoading(false));
    }

    const getTrailer = id => {

        axios.get(
            SEARCH + `movie/${id}/videos?api_key=${KEY}&language=en-US`
        ).then(response => {

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

        axios.get(
            SEARCH + `movie/popular?api_key=${KEY}&language=en-US&page=1`
        ).then(response => {
            localStorage.setItem('popularMovies', JSON.stringify(response.data.results));
        });
    }

    const clearSearch = () => {
        dispatch({
            type: CLEAR_MOVIES
        })
    }

    const {movie, movies, loading, trailer, popular} = state;

    return (
        <MovieContext.Provider value={{
            searchMovies, getMovie, getTrailer, getPopular, setLoading, clearSearch, movie, movies, loading, trailer, popular
        }}>
            {children}
        </MovieContext.Provider>
    )
}