import React, {Fragment, useContext, useLayoutEffect, useState} from 'react';
import {MovieContext} from "../context/movie/movieContext";
import poster from "../no_poster.jpg";
import {Link} from "react-router-dom";
import {Loading} from "../components/Loading";
import {Trailer} from "../components/Trailer";
import {Modal} from "../components/Modal";
import {IMG_API} from "../config";



export const Movie = ({match}) => {
    const [modalActive, setModalActive] = useState(false);

    const {getMovie, movie, loading} = useContext(MovieContext);
    const idMovie = match.params.id;
    // eslint-disable-next-line
    useLayoutEffect(() => {
        getMovie(idMovie)
    },[]);

    const {title, overview, genres, poster_path, release_date, revenue, runtime,  vote_average, tagline} = movie;
    const d = new Date(release_date);
    let year = d.getFullYear();

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
        <Fragment>
            {loading ? <Loading/>: ''}
            <Link to="/" className={`btn button_back text-white mb-3 ${loading ? 'hidden' : ''}`}>Назад</Link>

            <div className={`card mb-4 movie_card justify-content-center ${loading ? 'hidden' : ''}`}>
                <div className="card-body white_text_dark_bg">
                    <div className="row d-flex justify-content-center text_movie">
                        <img src={poster_path ? (IMG_API + poster_path) : poster } alt={title} className="inside-movie rounded inside-movie_margin"/>
                        <div className="col">
                            <div className="d-flex align-items-start">
                                <h2 className="title">{title ? title : ''} {year ? `(${year})` : ''}</h2>
                                <span className={`bg_vote ${voteColor(vote_average)}`}>{vote_average ? vote_average : ''}</span>
                            </div>

                            <p className="fst-italic">{tagline ? `"${tagline} "` : ''}</p>
                            <div className="d-flex flex-wrap mb-3" >
                                {genres
                                    ? genres.map((genre, index, array) =>
                                        <div className="genre rounded" key={genre.id}>{genre.name}{array.length - 1 === index ? '' : ','}</div>
                                    )
                                    : ''
                                }
                            </div>
                            <div className="mb-2">{runtime ? `Runtime: ${runtime} minutes` : '' }</div>
                            <p>{revenue ? `Budget: ${revenue}$` : '' }</p>
                            <div className="mb-4 card_text">{overview ? overview : ''}</div>
                            <button className="btn button_back btn-color mb-3" onClick={()=> setModalActive(true)}>Trailer</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <Trailer idMovie={idMovie}/>
            </Modal>
        </Fragment>
    )
}