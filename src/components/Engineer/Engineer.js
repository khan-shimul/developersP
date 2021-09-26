import React from 'react';
import './Engineer.css'

const Engineer = (props) => {
    // console.log(props.handleHire)

    const { name, img, title, hourlyRate, address, age } = props.engineer

    return (
        <div className="col-md-4 g-4 mb-3">
            <div className="card h-100 text-center eng-card">
                <img src={img} className="card-img-top devs-img" alt="..." />
                <div className="card-body dev-details">
                    <ul>
                        <li className="name-text">{name}</li>
                        <li className="title">{title}</li>
                    </ul>
                    <div className="d-flex justify-content-center">
                        <p className="d-inline me-2"><small>Age: {age}</small></p>
                        <address><p><small><i className="fas fa-map-marker-alt"></i> {address}</small></p></address>
                    </div>
                    <p className="hourly"><span className="hr-text">Hourly Rate:</span> ${hourlyRate}</p>
                    <button
                        onClick={() => props.handleHire(props.engineer)}
                        className="hire-me-btn"
                    >
                        Hire Me <i className="fas fa-arrow-left"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Engineer;