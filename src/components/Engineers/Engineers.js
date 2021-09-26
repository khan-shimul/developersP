import React, { useEffect, useState } from 'react';
import Engineer from '../Engineer/Engineer';
import Hire from '../Hire/Hire';
import './Engineers.css'

const Engineers = () => {
    const [engineers, setIngineers] = useState([])
    const [hireDevs, setHireDevs] = useState([])
    // console.log(hireDevs)

    useEffect(() => {
        fetch('./devs.JSON')
            .then(res => res.json())
            .then(data => setIngineers(data))
    }, [])

    const handleHire = engineer => {
        const newHireDevs = [...hireDevs, engineer]
        setHireDevs(newHireDevs)
    }

    return (
        <div className="mx-4">
            <div className="row d-flex mx-auto">
                <div className="engineer-container col-md-9">
                    <p className="mt-4"><small>HIRE FREELANCE DEVELOPERS AND ENGINEERS</small></p>

                    <div className="row">
                        {
                            engineers.map(engineer => <Engineer
                                key={engineer.id}
                                engineer={engineer}
                                handleHire={handleHire}
                            />)
                        }
                    </div>
                </div>

                <div className="hire-container col-md-3">
                    <Hire
                        hireDevs={hireDevs}
                        key={hireDevs.id}
                    />
                </div>
            </div>
        </div>
    );
};

export default Engineers;