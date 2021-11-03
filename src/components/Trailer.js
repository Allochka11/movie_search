import React, {useContext, useEffect} from 'react';
import {MovieContext} from "../context/movie/movieContext";

export const Trailer = ({idMovie}) => {

    const {getTrailer, trailer} = useContext(MovieContext);


    useEffect(()=>{
        console.log('getVideo id movie',idMovie)

        getTrailer(idMovie);

    },[])

    // console.log(trailer)





    // console.log('movieTrailer',movieTrailer)


    return(
        <>
            {trailer && !trailer.length
                ? ''
                : <div className="video-responsive">

                    <iframe
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${trailer[0]}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </div>
            }


        </>

    )
}
