import React, {useReducer} from "react";
import {movieReducer} from "./movieReducer";
import {MovieContext} from "./movieContext";


export const MovieState = ({children}) => {
    const [state, dispatch] = useReducer(movieReducer);


    return (
        <MovieContext.Provider>
            {children}
        </MovieContext.Provider>
    )
}