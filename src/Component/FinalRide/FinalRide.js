import React, { useState, Component } from 'react';
import { useParams } from 'react-router-dom';
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
        <div className="cart">
            <div className="details">
                <form className="form">
                    <h4>Ticket Section</h4>
                    <div className="first">
                        <p>Ticket :1</p>
                        <img src={vehicles[id].Image}></img>
                        <p>Rent: {vehicles[id].rent}</p>
                    </div>
                    <div className="second">
                        <p>Ticket :2</p>
                        <img src={vehicles[id].Image}></img>
                        <p>Rent: {vehicles[id].rent}</p>
                    </div>
                </form>
            </div>
            <div>
                <img src={gmap}></img>
            </div>
        </div>
    );
};

export default FinalRide;