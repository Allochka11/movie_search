import React, {Fragment, useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {MovieContext} from "../context/movie/movieContext";



export const Input = () => {
    const [value, setValue] = useState('');
    const {show, hide} = useContext(AlertContext);
    const {clearSearch,searchMovies,setLoading} = useContext(MovieContext);

    // console.log(alert);

    const onSubmit = (event) => {
        if(event.key !== 'Enter') {
            return
        }

        clearSearch();
        if (value.trim()) {
            event.preventDefault();
            hide();
            searchMovies(value.trim())
            setLoading(true)
        } else {
            show('Write a movie title', 'danger');
        }
    }

    return(
        <Fragment>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput" className="pt-4 pb-2">Search some movie by title</label>
                <input
                    autoComplete="off"
                    type="text"
                    className="text form-control dark-theme text mb-4"
                    id="formGroupExampleInput"
                    placeholder="example: Avengers"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onKeyPress={onSubmit} />
            </div>
        </Fragment>
    )
}
