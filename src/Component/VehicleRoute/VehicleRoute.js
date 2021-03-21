import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import gmap from '../../../src/Component/Image/Map.png';
import './VehicleRoute.css';
import Fakedata from '../../../src/Component/Fakedata'

const VehicleRoute = () => {
    const { id } = useParams();
    const first4 = Fakedata.slice(0, 4);
    const [vehicles, setvehicles] = useState(first4);

    if (vehicles[0].id === id) {
        return vehicles[id].Image
    }
    return (
        <div>
            <div className="Header">
                <nav>
                    <h3>King Riders</h3>
                    <a href="/">Home</a>
                    <a href="/logIn">Destination</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                    <Link to="/logIn"><button>Log In </button></Link>
                    {/* <h4>{user.name}</h4> */}
                </nav>
            </div>
            <div className="fullInfo">
                <form className="formInfo">
                    <h4>pick from</h4>
                    <input class="form-control" value={vehicles[id].From} placeholder="Default input"></input>
                    <br />
                    <h4>pick To</h4>
                    <input class="form-control" value={vehicles[id].To} placeholder="Default input"></input>
                    <br />
                    <br />
                    <label for="start"> Set schedule date: </label>

                    <input type="date" id="start" name="trip-start"
                        min="2021-03-21" max="2021-04-21">
                    </input>
                    <br />
                    <Link to={`/vehicles/${id}/final`}><button>Submit</button>
                    </Link>
                </form>
                <div className="info">
                    <img src={gmap} alt="wait"></img>
                </div>
            </div>
        </div>
    );
};

export default VehicleRoute;