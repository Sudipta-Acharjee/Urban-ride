import React, { useState, Component } from 'react';
import { useParams } from 'react-router-dom';
import Fakedata from '../../../src/Component/Fakedata';
import './FinalRide.css'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const FinalRide = () => {
    const { id } = useParams();
    const first4 = Fakedata.slice(0, 4);
    const [vehicles, setvehicles] = useState(first4);
    center: {
        lat = 59.95,
            lng = 30.33
    }
    zoom: 11
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
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "sha512-Io55IuQY3kydzHtbGvQya3H+KorS/M9rSNyfCGCg9WZ4pyT/lCxIlpJgG1GXW/PswzC84Tr2fBYi+7+jFVQQBw==" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default FinalRide;