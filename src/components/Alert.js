import React from 'react';

export const Alert = (props) => {
    console.log(props.alert)

    return(
        <div>
            <div className={`alert alert-${props.alert.type || 'light'}`} role="alert">
                {props.alert.text}
                {/*{props.alert.name}*/}

                <button type="button" className="close button_x" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

        </div>
    )
}
