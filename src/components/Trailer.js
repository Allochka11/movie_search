import React, {useContext, useEffect} from 'react';
import {MovieContext} from "../context/movie/movieContext";

export const Trailer = ({idMovie}) => {

    const {getVideo, movieTrailer} = useContext(MovieContext);

    useEffect(()=>{
        console.log('getVideo id movie',idMovie)

        getVideo(idMovie);


        console.log('movieTrailer',movieTrailer)

    },[])

    // console.log('movieTrailer',movieTrailer)


    return(

        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${movieTrailer}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}
