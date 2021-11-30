import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext);

    if (!alert) return null

    return(
        <div>
            <div className={`alert alert-${alert.type || 'light'}`} role="alert">
                {alert.text}
                <button type="button" className="close button_x" data-dismiss="alert" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}
