import React from 'react';
import DisplayEngineer from '../DisplayEngineer/DisplayEngineer';
import './Hire.css'

const Hire = (props) => {
    const { hireDevs } = props

    const totalReducer = (previous, engineer) => previous + engineer.hourlyRate;
    const total = hireDevs.reduce(totalReducer, 0)

    return (
        <div className="hire-bg text-white p-3 rounded">
            <div className="text-center">
                <h5><i className="fas fa-user"></i> Selected: {hireDevs.length}</h5>
                <p>Total: ${total}</p>
            </div>

            {
                hireDevs.map(dev => <DisplayEngineer
                    key={dev.id}
                    dev={dev}
                />)
            }

            <button className="btn-confirm d-flex mx-auto mt-3">Confirm</button>
        </div >
    );
};

export default Hire;