import React, {useContext} from 'react';
import {Input} from "../components/Input";
import {Card} from "../components/Card";
import {MovieContext} from "../context/movie/movieContext";
import {Loading} from "../components/Loading";
import {Slider} from "../components/Slider";




export const Home = () => {
    const {loading, movies} = useContext(MovieContext);

    return (
        <div>
            <Slider/>
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
        </div>
    )
}