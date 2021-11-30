import React from 'react';
import {Link} from "react-router-dom";
import poster from '../no_poster.jpg'

const IMG_API = 'https://image.tmdb.org/t/p/original';

export const Card = ({movie}) => {

    const {id, poster_path, original_title, vote_average, overview } = movie;

    const voteColor = (vote_average) => {

        if (vote_average >= 8) {
            return 'green';
        } else if (vote_average >= 6) {
            return 'yellow';
        } else {
            return 'red';
        }
    }

    return(
        <div className="card mt-4 card_border movie border-0 ">
            <Link to={`/movie/${id}`}>
                <img src= {poster_path ? (IMG_API + poster_path) : poster } alt={original_title} className=" card-img-top dark-theme"
            />
            <div className="card-body radius d-flex dark-theme align-items-center justify-content-between">
                <h6 className="card-title">{original_title}</h6>
                <span className={`bg_vote ${voteColor(vote_average)}`}>{vote_average}</span>
            </div>
            <div className="overview">
                <p>{overview ? overview : 'There is no overview yet'}</p>
            </div>
            </Link>
        </div>
    )
}
