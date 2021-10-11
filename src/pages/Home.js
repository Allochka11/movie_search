import React from 'react';
import {Input} from "../components/Input";
import {Card} from "../components/Card";

export const Home = () => {
    const cards = new Array(15)
        .fill('')
        .map((_,index) => index);
    // console.log(cards)
    return(
        <div>
            <Input/>
            <div className="row d-flex justify-content-center" >
                {cards.map(card => {
                    return (
                        <div className="col-auto mb-3"key={card}>
                            <Card/>
                        </div>
                    )
                })}


            </div>

        </div>
    )
}
