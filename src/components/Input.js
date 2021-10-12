import React, {Fragment, useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";

export const Input = () => {
    const [value,setValue] = useState(' ');
    const {show} = useContext(AlertContext);

    const onSubmit = (event) => {
        if(event.key !== 'Enter') {
            return
        }
        if (value.trim()) {
            console.log('Make request with: ' + value.trim())
        } else {
            show('Write a movie title', 'danger')
        }
    }
    // console.log()


    return(
        <Fragment>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput" className="pt-4 pb-2">Search some movie by it name</label>
                <input
                    type="text"
                    className="text form-control dark-theme text"
                    id="formGroupExampleInput"
                    placeholder="example: Avengers"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onKeyPress={onSubmit} />
            </div>
        </Fragment>
    )
}
