import React from 'react';
import DisplayEngineer from '../DisplayEngineer/DisplayEngineer';
import './Hire.css'

const Hire = (props) => {
    console.log(props.hireDevs)
    const { hireDevs } = props

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.hourlyRate;
    const total = hireDevs.reduce(totalReducer, 0)

    // let total = 0;
    // for (const dev of hireDevs) {
    //     total = total + dev.hourlyRate;
    // }
    return (
        <div className="hire-bg text-white p-3 rounded">
            <h5><i className="fas fa-user"></i> Selected: {hireDevs.length}</h5>
            <p>Total: ${total}</p>

            {
                hireDevs.map(dev => <DisplayEngineer
                    dev={dev}
                />)
            }

            <button className="btn-regular d-flex mx-auto mt-3">Confirm</button>
        </div >
    );
};

export default Hire;