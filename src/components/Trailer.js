import React, {useContext, useEffect} from 'react';
import {MovieContext} from "../context/movie/movieContext";

export const Trailer = ({idMovie}) => {

    const {getTrailer, trailer, clearSearch} = useContext(MovieContext);
    // eslint-disable-next-line
    useEffect(()=>{
        // clearSearch();


        getTrailer(idMovie);
    },[]);

    return(
        <div>

            {trailer && !trailer.length
                ? <div>Трейлер отсутствует!</div>
                : <div className="video-container">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${trailer[0]}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            }
        </div>
    )
}
