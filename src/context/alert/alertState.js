import React, {useReducer} from 'react';
import {AlertContext} from "./alertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

export const AlertState = ({children}) => {
    // console.log('children',children)
    const [state, dispatch] = useReducer(alertReducer, null)

    const hide = () => dispatch({type: HIDE_ALERT});
    const show = (text, type = 'light') => {
        dispatch ({
            type: SHOW_ALERT,
            payload: {type, text}
        })
    }


    return(
        <AlertContext.Provider value={{hide, show, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}
