import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import { styles } from './MapStyles';

import './MapContainer.scss';

class MapContainer extends Component {
    render() {

        const { place, google } = this.props;

        return (
            <div className='MapContainer'>
                <Map google={google} 
                    initialCenter={{ lat: place.latitude, lng: place.longitude }} 
                    center={{ lat: place.latitude, lng: place.longitude }}
                    zoom={place.zoom} 
                    styles={styles}
                    containerStyle={{width: '48.25vw', height: '65vh', position: 'absolute'}}
                    //containerStyle={{width: '30.5vw', height: '40vh', position: 'absolute'}}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc",
})(MapContainer);
 
