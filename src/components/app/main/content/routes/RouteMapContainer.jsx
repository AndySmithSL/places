import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import { styles } from './MapStyles';

import './RouteMapContainer.scss';

class RouteMapContainer extends Component {

    render() {

        const { route, google } = this.props;

        //var startLatitude = route.origin.latitude;
        //var startLongitude = route.origin.longitude;
        //var start = new google.maps.LatLng(startLatitude, startLongitude);
        var zoom = 5;

        //route.waypoints.forEach(waypoint => {
        //    items.push(<Marker routeLeg={leg} key={leg.id} />)
        //});

        return (
            <div className='MapContainer'>
                <Map google={google} 
                    initialCenter={{ lat: route.origin.latitude, lng: route.origin.longitude }} 
                    center={{ lat: route.origin.latitude, lng: route.origin.longitude }}
                    zoom={zoom}
                    styles={styles}
                    containerStyle={{width: '48.25vw', height: '62vh', position: 'absolute'}}>
                        <Marker
                            lat={11.0168}
                            lng={76.9558}
                            name="My Marker"
                            color="blue"
                        />
                        <Marker
                            lat={11.0168}
                            lng={76.9558}
                            name="My Marker"
                            color="blue"
                        />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc",
})(RouteMapContainer);
 
