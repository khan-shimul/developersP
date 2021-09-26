import React from 'react';
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
        <div className="bg-primary text-white p-3 rounded">
            <h5><i class="fas fa-user"></i> Selected: {hireDevs.length}</h5>
            <p>Total: ${total}</p>

            {
                hireDevs.map(dev => <li>{dev.name}</li>)
            }

            <button className="btn-regular d-flex mx-auto mt-3">Confirm</button>
        </div >
    );
};

export default Hire;