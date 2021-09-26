import React from 'react';
import './DisplayEngineer.css'

const DisplayEngineer = (props) => {
    console.log(props.dev)
    const { name, img } = props.dev
    return (
        <div className="single-engineer text-primary mb-2">
            <h6>{name}</h6>
        </div>
    );
};

export default DisplayEngineer;