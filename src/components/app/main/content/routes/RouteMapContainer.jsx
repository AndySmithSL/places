import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import { styles } from './MapStyles';

import './RouteMapContainer.scss';

class RouteMapContainer extends Component {

    addMarker(latitude, longitude, title, map)
    {
        var latLng = new google.maps.LatLng(latitude, longitude);
        var contentString = '<h3>' + title + '</h3>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: latLng,
            title: title,
            map: map,
            draggable: false,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: 'red',
                fillOpacity: 0.8,
                scale: 5,
                strokeColor: 'black',
                strokeWeight: 1
            }
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }

    render() {

        const { route, google } = this.props;

        var startLatitude = route.origin.latitude;
        var startLongitude = route.origin.longitude;
        var start = new google.maps.LatLng(startLatitude, startLongitude);
        var zoom = 5;

        route.waypoints.forEach(waypoint => {
            items.push(<Marker routeLeg={leg} key={leg.id} />)
        });

        return (
            <div className='MapContainer'>
                <Map google={google} 
                    initialCenter={{ lat: route.origin.latitude, lng: route.origin.longitude }} 
                    center={{ lat: route.origin.latitude, lng: route.origin.longitude }}
                    zoom={zoom}
                    styles={styles}
                    containerStyle={{width: '48.25vw', height: '62vh', position: 'absolute'}}/>
                    {props.markers.map(marker => (
                        <Marker
                            {...marker}
                            onRightClick={() => props.onMarkerRightClick(marker)}
                        />
                    )}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc",
})(RouteMapContainer);
 
