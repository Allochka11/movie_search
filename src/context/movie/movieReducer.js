import {
    CLEAR_LAST_MOVIE,
    CLEAR_MOVIES,
    GET_MOVIE,
    GET_POPULAR,
    GET_TRAILER,
    SEARCH_MOVIES,
    SET_LOADING
} from "../types";

const handlers = {
    // ищет фильм по названию
    [SEARCH_MOVIES]: (state, action) => ({
        ...state,
        movies: action.payload,
    }),

    // получает конкретный фильм
    [GET_MOVIE]: (state, action) => ({
        ...state,
        movie: action.payload
    }),

    [GET_TRAILER]: (state, action) => ({
        ...state,
        trailer: action.payload
    }),

    [GET_POPULAR]: (state, action) => ({
        ...state,
        popular: action.payload,
        loading: false
    }),


    // ставит лоадер в момент запроса
    [SET_LOADING]: (state, action) => ({
        ...state,
        loading: action.loading
    }),


    // очищает поиск фильмов
    [CLEAR_MOVIES]: (state) => ({
        ...state,
        movies: []
    }),

    // очищает поиск фильмов
    [CLEAR_LAST_MOVIE]: (state) => ({
        ...state,
        movie: {}
    }),

    DEFAULT: (state) => state
}
// console.log('movie handlers', handlers)

export const movieReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;

    console.log('movie handler',action)


    return handler(state, action);
}