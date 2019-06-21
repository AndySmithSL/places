/*global google*/
import React, { Component } from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";
import { styles } from '../places/MapStyles';

import './MapDirections.scss';

class MapDirections extends Component {

    constructor(props) {
        super(props);
        this.state = { directions: null };
    }

    componentDidMount() {

        const { drive } = this.props;
        const directionsService = new google.maps.DirectionsService();

        let waypoints = drive.waypoints.map(place => { 
            return { location: new google.maps.LatLng(place.latitude, place.longitude) }
        });

        const origin = { lat: drive.origin.latitude, lng: drive.origin.longitude };
        const destination = { lat: drive.destination.latitude, lng: drive.destination.longitude };
        
        directionsService.route({ origin, destination, waypoints,  travelMode: google.maps.TravelMode.DRIVING },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({ directions: result });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }

    render() {

        const { drive } = this.props;

        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap 
                defaultCenter={{ lat: drive.destination.latitude, lng: drive.destination.longitude }} 
                defaultZoom={13} 
                defaultOptions={{ styles: styles }} >
                <DirectionsRenderer 
                    directions={this.state.directions} 
                    options={{ polylineOptions:{ strokeColor:"gray" }, suppressMarkers : false }}
                />
            </GoogleMap>
        ));

        return (
            <div className='MapDirections'>
                <GoogleMapExample
                    googleMapURL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc&v=3.exp&libraries=geometry,drawing,places"
                    containerElement={<div style={{ height: '100%', width: "100%" }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default MapDirections;
