import React from 'react';
import './Engineer.css'

const Engineer = (props) => {
    // console.log(props.handleHire)

    const { name, img, address, title, hourlyRate } = props.engineer

    return (
        <div className="col-md-4 g-4">
            <div className="card h-100 text-center">
                <img src={img} className="card-img-top devs-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{title}</p>
                    <address><p><small>{address}</small></p></address>
                    <p>Hourly Rate: ${hourlyRate}</p>
                    <button
                        onClick={() => props.handleHire(props.engineer)}
                        className="btn-regular"
                    >
                        Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Engineer;