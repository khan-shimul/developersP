import React from 'react';
import './DisplayEngineer.css'

const DisplayEngineer = (props) => {
    console.log(props.dev)
    const { name, img } = props.dev
    return (
        <div className="single-engineer text-primary mb-2 d-flex align-items-center justify-content-between">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h6>{name}</h6>
            </div>
        </div>
    );
};

export default DisplayEngineer;