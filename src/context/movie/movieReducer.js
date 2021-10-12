import React from "react";
import {CLEAR_MOVIES, GET_MOVIE, GET_REPOS, SEARCH_MOVIES, SET_LOADING} from "../types";

const handlers = {
    // ищет фильм по названию
    [SEARCH_MOVIES]: (state, action) => ({
        ...state,
        movies: action.payload,
        loading: false
    }),

    // получает репозиторий с фильмами, ссылки
    // [GET_REPOS]: (state, action) => ({
    //     ...state,
    //     repos: action.payload,
    //     loading: false
    // }),

    // получает конкретный фильм
    [GET_MOVIE]: (state, action) => ({
        ...state,
        movie: action.payload,
        loading: false
    }),

    // ставит лоадер в момент запроса
    [SET_LOADING]: (state) => ({
        ...state,
        loading: true
    }),

    // очищает поиск фильмов
    [CLEAR_MOVIES]: (state) => ({
        ...state,
        movies: []
    }),

    DEFAULT: (state) => state
}
console.log('movie handlers',handlers)

export const movieReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;

    console.log('movie handler',handler)


    return handler(state, action);
}