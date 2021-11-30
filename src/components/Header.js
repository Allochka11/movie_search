import React from 'react';
import logo from "../logo.svg";
import {NavLink} from "react-router-dom";


export const Header = () => {

    return(
        <div className="container d-flex justify-content-end">
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <NavLink className="navbar-brand" to="/">
                    <img
                        className="vertical-align-left"
                        src={logo}
                        alt={'Logo'}
                        width={'200px'}
                        height={'50px'}
                    />
                </NavLink>
            </nav>
        </div>
    )
}
