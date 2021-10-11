import React from 'react';
import {AlertContext} from "./alertContext";

export const AlertState = ({children}) => {
    console.log(children)
    return(
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}
