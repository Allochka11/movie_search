import React, {useContext, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import {MovieContext} from "../context/movie/movieContext";
import {Loading} from "./Loading";
const IMG_API = 'https://image.tmdb.org/t/p/original';



export const Slider = ({popular}) => {

    const {loading} = useContext(MovieContext)

    const [index, setIndex] = useState(0);

    // console.log('index',index);


    const handleSelect = (selectedIndex, event) => {
        console.log(event.target)
        if(event.key === 'click') {
            console.log('click')
        }else if (event.key === 'onClick') {
            console.log('onClick')
        }
        // console.log('selectIndex',selectedIndex)
        // console.log(e)
        setIndex(selectedIndex);
    };

    return (
        <div className="row">
            {loading ? <Loading/>
                :<Carousel fade interval={1000000} className="p-0 carousel_radius" activeIndex={index} onSelect={handleSelect}>
                    {popular.map((popularMovie, key ) => {
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

                        // return (
                        //     <Carousel.Item key={key} className="carousel_height">
                        //         <Link to={`/movie/${popularMovie.id}`}>
                        //             <img
                        //                 className="d-block w-100 slider_img"
                        //                 src={IMG_API + popularMovie.backdrop_path}
                        //                 alt="carousel"
                        //                 contentEditable="false"
                        //             />
                        //             <Carousel.Caption>
                        //                 <h3 className="carousel_title">{popularMovie.original_title}</h3>
                        //             </Carousel.Caption>
                        //         </Link>
                        //     </Carousel.Item>
                        // )
                    })}
                </Carousel>
            }
        </div>
    )
}