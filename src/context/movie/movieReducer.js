import {
    CLEAR_MOVIES,
    GET_MOVIE,
    GET_TRAILER,
    SEARCH_MOVIES,
    SET_LOADING
} from "../types";

const handlers = {

    [SEARCH_MOVIES]: (state, action) => ({
        ...state,
        movies: action.payload,
    }),

    [GET_MOVIE]: (state, action) => ({
        ...state,
        movie: action.payload
    }),

    [GET_TRAILER]: (state, action) => ({
        ...state,
        trailer: action.payload
    }),

    [SET_LOADING]: (state, action) => ({
        ...state,
        loading: action.loading
    }),


    [CLEAR_MOVIES]: (state) => ({
        ...state,
        movies: []
    }),

    DEFAULT: (state) => state
}

export const movieReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}