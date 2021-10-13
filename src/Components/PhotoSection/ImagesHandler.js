import React from 'react';
import { Link } from 'react-router-dom';

export default function ImagesHandler(props) {
    return (
        <div>
            <Link to="/slider">
                <img src={props.img} alt="Marriage" className="card" />
            </Link>
        </div>

    )
}
