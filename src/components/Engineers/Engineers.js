import React, { useEffect, useState } from 'react';
import Engineer from '../Engineer/Engineer';
import './Engineers.css'

const Engineers = () => {

    const [engineers, setIngineers] = useState([])
    useEffect(() => {
        fetch('./devs.JSON')
            .then(res => res.json())
            .then(data => setIngineers(data))
    }, [])

    return (
        <div className="container row d-flex mx-auto">
            <div className="engineer-container col-md-10">
                <h2>Engineer: {engineers.length}</h2>

                <div className="row">
                    {
                        engineers.map(engineer => <Engineer
                            engineer={engineer}
                        />)
                    }
                </div>
            </div>

            <div className="hire-container col-md-2">
                <h2>Hired</h2>
            </div>
        </div>
    );
};

export default Engineers;