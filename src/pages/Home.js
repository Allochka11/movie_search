import React, {useContext} from 'react';
import {Input} from "../components/Input";
import {Card} from "../components/Card";
import {MovieContext} from "../context/movie/movieContext";

export const Home = () => {
    const {loading, movies} = useContext(MovieContext);


    // console.log(cards)
    return(
        <div>
            <Input/>
            <div className="row d-flex justify-content-center" >
                {loading
                    ? <p className={'text-center'}>Loading...</p>
                    : movies.map(movie => {
                        return (
                            <div className="col-auto mb-3"key={movie.id}>
                                <Card/>
                            </div>
                        )
                    })

                }



            </div>

        </div>
    )
}
