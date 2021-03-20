import React, { useState } from 'react';
import './Home.css'
import Fakedata from '../Fakedata'
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import { Link } from 'react-router-dom';


const Home = () => {
    const first4 = Fakedata.slice(0, 4);
    const [vehicles, setvehicles] = useState(first4);

    return (
        <div >
            <div className="Header">
                <nav>
                    <h3>King Riders</h3>
                    <a href="/">Home</a>
                    <a href="/logIn">Destination</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                    <Link to="/logIn"><button>Log In</button></Link>
                </nav>
            </div>
            <div>
                {
                    vehicles.map(vehicle => <VehicleDetails vehicle={vehicle}></VehicleDetails>)
                }
               
            </div>
        </div>

    );
};

export default Home;