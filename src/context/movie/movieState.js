import React, {useReducer} from "react";
import {movieReducer} from "./movieReducer";
import {MovieContext} from "./movieContext";
import {CLEAR_MOVIES, GET_MOVIE, GET_REPOS, SEARCH_MOVIES, SET_LOADING} from "../types";
import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;

export const MovieState = ({children}) => {


    const initialState = {
        movie: {},
        movies: [],
        loading: false,
        repos: []
    }
    const [state, dispatch] = useReducer(movieReducer, initialState);

    const searchMovies = async value => {
        setLoading();
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${value}&language=en-US`
        )
        //... request
        dispatch({
            type: SEARCH_MOVIES,
            payload: response.data.results
        })
    }

    const getMovie = async name => {
        setLoading();
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${name}`
        )
        dispatch({
            type: GET_MOVIE,
            payload: response.data
        })
    }

    // const getRepos = async name => {
    //     setLoading();
    //     //... request
    //     dispatch({
    //         type: GET_REPOS,
    //         payload: []
    //     })
    // }

    const clearSearch = () => {
        dispatch({
            type: CLEAR_MOVIES
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING,
        })
    }

    const {movie, movies, repos, loading} = state;


    return (
        <MovieContext.Provider value={{
            searchMovies, getMovie, setLoading, clearSearch, movie, movies, repos, loading
        }}>
            {children}
        </MovieContext.Provider>
    )
}