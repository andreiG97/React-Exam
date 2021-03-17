import React from 'react';
import { Link } from 'react-router-dom';


function Page404() {
    return (
        <div>
            <h1>Not Found</h1>
            <Link to="/">
                <button className="btn btn-info">Home</button>
            </Link>
        </div>
    )
}

export default Page404
