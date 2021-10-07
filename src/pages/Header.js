import React from 'react';
import logo from "../logo.svg";

export const Header = () => {
    return(
        <div>
            <a href="/">
                <img
                    className="vertical-align-left"
                    src={logo}
                    alt={'Logo'}
                    width={'200px'}
                    height={'100px'}
                />
            </a>


        </div>
    )
}
