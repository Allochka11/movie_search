import React from 'react';
import {Link} from "react-router-dom";
// import logo from "../logo.svg";

export const Card = () => {
    return(
        <div className="card mt-4 card_border card_width ">
            <img src={'https://source.unsplash.com/random'} alt={'react'} className=" card-img-top dark-theme" height={'300px'}/>
            <div className="card-body radius dark-theme">
                <div className="card-title">Movie</div>
                <Link to={'/movie/'} className="btn btn-color">Open</Link>
            </div>
        </div>
    )
}
