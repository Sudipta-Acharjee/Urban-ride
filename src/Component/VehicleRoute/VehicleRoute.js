import React from 'react';
import { Link, useParams } from 'react-router-dom';
import gmap from '../../../src/Component/Image/Map.png';
import './VehicleRoute.css';

const VehicleRoute = () => {
    const { id } = useParams();
    const submitted = () => {
        console.log('submitted')
    }
    const handleValue = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="fullInfo">
            <form className="formInfo">
                <h4>pick from</h4>
                <input type="text" onBlur={handleValue} placeholder="From"></input>
                <br />
                <h4>pick To</h4>
                <input type="text" onBlur={handleValue} placeholder="To"></input>
                <br />
                <br />
                <Link to={`/vehicles/${id}/final`}><button onClick={submitted}>Submit</button>
                </Link>
            </form>
            <div className="info">
                <img src={gmap} alt="wait"></img>
            </div>
        </div>
    );
};

export default VehicleRoute;