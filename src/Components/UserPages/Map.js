import { nullableTypeAnnotation } from '@babel/types';
import React from 'react';

class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
    }
    getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
    }
    getCoordinates(position){
        console.log(position.coords.latitude)
    }

    render(){
        return(
            <div className="Map">
                <h2>React Geolocation Example</h2>
                <button onClick={this.getLocation}>Get cordinates</button>
                <h4>HTML5 Coordinates</h4>
                <p>Latitute: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
                <h4>Google Maps Reverse Geocoding</h4>
                <p>Address: {this.state.userAddress}</p>
            </div>
        )
    }
}

export default Map;