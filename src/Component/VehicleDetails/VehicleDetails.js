import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleDetails.css';

const VehicleDetails = (props) => {
    const { name, Image, id } = props.vehicle;
    return (
        <div className="row">
            <div className="column">
                <div className="card vehicleCart ">
                    <Link to={`/vehicles/${id}`}>
                        <img className="card-img-top " src={Image} alt="wait"></img>
                        <div className="vehicleCart">
                            <h2>{name}</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;