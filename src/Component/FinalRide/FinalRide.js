import React, { useState, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import Fakedata from '../../../src/Component/Fakedata';
import './FinalRide.css';
import gmap from '../../../src/Component/Image/Map.png'

const FinalRide = () => {
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
                </nav>
            </div>
            <div className="cart">
                <div className="details">
                    <form className="form">
                        <h4>Ticket Section</h4>
                        <div className="first">
                            <h4>{vehicles[id].From} to {vehicles[id].To}</h4>
                            <p>Ticket :1</p>
                            <small>person:{vehicles[id].person}</small>
                            <img src={vehicles[id].Image}></img>
                            <p>Rent: {vehicles[id].rent}</p>
                        </div>
                        <div className="second">
                            <p>Ticket :2</p>
                            <small>person:{vehicles[id].person}</small>
                            <img src={vehicles[id].Image}></img>
                            <p>Rent: {vehicles[id].rent}</p>
                        </div>
                    </form>
                </div>
                <div>
                    <img src={gmap}></img>
                </div>
            </div>
        </div>
    );
};

export default FinalRide;