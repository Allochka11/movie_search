import React, {Fragment} from 'react';

export const Input = () => {
    return(
        <Fragment>
            <form action="post">
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput" className="pt-4 pb-2">Search some movie by it name</label>
                    <input type="text" className="text form-control dark-theme text" id="formGroupExampleInput" placeholder="example: Avengers"/>
                </div>
            </form>
        </Fragment>
    )
}
