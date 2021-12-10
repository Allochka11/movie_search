import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import {MovieContext} from "../context/movie/movieContext";
const IMG_API = 'https://image.tmdb.org/t/p/original';

export const Slider = () => {

    const {getPopular} = useContext(MovieContext);

    // if(localStorage === null) {
    //     getPopular()
    //     console.log('get populer')
    // }
    // class kd extends React.Component {
    //     componentDidMount() {
    //
    //     }
    // }


    useEffect ( ()=> {
        getPopular();
    },[])

    const raw = localStorage.getItem('popularMovies');
    const popularMovies = JSON.parse(raw);

    return (
        <div className="row">
            <Carousel fade interval={2000} className="p-0 carousel_radius">
                {popularMovies ? popularMovies.map((popularMovie, key ) => {
                    return (
                        <Carousel.Item key={key} className="carousel_height">
                            <Link to={`/movie/${popularMovie.id}`}>
                                <img
                                    className="d-block w-100 slider_img"
                                    src={IMG_API + popularMovie.backdrop_path}
                                    alt="carousel"
                                    contentEditable="false"
                                />
                                <Carousel.Caption>
                                    <h3 className="carousel_title">{popularMovie.original_title}</h3>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    )
                }) : ''}
            </Carousel>
        </div>
    )
}