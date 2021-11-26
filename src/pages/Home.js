import React, {useContext, useEffect} from 'react';
import {Input} from "../components/Input";
import {Card} from "../components/Card";
import {MovieContext} from "../context/movie/movieContext";
import {Loading} from "../components/Loading";
import {Slider} from "../components/Slider";




export const Home = () => {
    const {loading, movies, getPopular,popular} = useContext(MovieContext);

    useEffect ( ()=> {
        getPopular();
    },[])

    // console.log(popular)



    return (
        <div>
            <Input/>
            {movies.total_results === undefined
                ? ''
                : <div className="row d-flex justify-content-center">
                    {loading ? <Loading/> : ''}
                    {
                        movies.results.map(movie => {
                            return (
                                <div className={`col-auto mb-3 d-flex ${loading ? 'hidden' : ''}`} key={movie.id}>
                                    <Card
                                        movie={movie}
                                    />
                                </div>
                            )

                        })
                    }
                </div>
            }
            {movies.total_results === 0 ? <p>Фильма нет. Попробуйте еще</p> : ''}

            {popular.total_results === undefined
                ? ''
                : <Slider popular={popular.results}/>
            }


        </div>
    )

}