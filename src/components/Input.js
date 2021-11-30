import React, {Fragment, useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {MovieContext} from "../context/movie/movieContext";

export const Input = () => {
    const [value, setValue] = useState('');
    const {show, hide} = useContext(AlertContext);
    const {clearSearch,searchMovies} = useContext(MovieContext);

    const onSubmit = (event) => {
        if(event.key !== 'Enter') {
            return
        }

        clearSearch();

        if (value.trim()) {
            event.preventDefault();
            hide();
            searchMovies(value.trim())
        } else {
            show('Write a movie title', 'danger');
        }
    }

    return(
        <Fragment>
            <div className="form-group">
                <input
                    autoComplete="off"
                    type="text"
                    className="text form-control dark-theme text mb-4 mt-4"
                    id="formGroupExampleInput"
                    placeholder="Search...example: Avengers"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onKeyPress={onSubmit}
                />
            </div>
        </Fragment>
    )
}
