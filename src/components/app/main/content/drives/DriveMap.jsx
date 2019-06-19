import React, { Component } from "react";


import { Map, GoogleApiWrapper, Polyline, Polygon, Marker } from "google-maps-react";

import { styles } from '../places/MapStyles';

import './DriveMap.scss';

class DriveMap extends Component {
    render() {

        const { place, google } = this.props;

        const triangleCoords = [
            {lat: 55.948903, lng: -3.205893},
            {lat: 55.948974, lng: -3.194407},
            {lat: 55.945285, lng: -3.191435},
            {lat: 55.943849, lng: -3.203837}
          ];

        // DirectionsService.route({   
        //     origin: 'Edinburgh', 
        //     destination: 'Glasgow',   
        //     travelMode: google.maps.TravelMode.DRIVING,   
        //    },  
        //      (result, status) => {   
        //        if (status === google.maps.DirectionsStatus.OK) {   
        //          const overViewCoords = result.routes[0].overview_path;   
        //            this.setState({   
        //              lineCoordinates: overViewCoords,
        //            });
        //        } else {
        //           console.warn(`error fetching directions ${status}`);
        //        }
        //      });

        // var service = new google.maps.DirectionsService();
        // const directionsDisplay = new google.maps.DirectionsRenderer(); 

        return (
            <div className='MapContainer'>
                {/* <Map google={google} 
                    initialCenter={{ lat: 55.947326, lng: -3.198838 }} 
                    center={{ lat: 55.947326, lng: -3.198838 }}
                    zoom={10} 
                    //styles={styles}
                    //containerStyle={{width: '49.25vw', height: '60vh', position: 'absolute'}}
                    containerStyle={{width: '30.5vw', height: '40vh', position: 'absolute'}}
                    >
                    <Polyline
                        paths={triangleCoords}
                        strokeColor='black'
                        strokeOpacity={0.8}
                        strokeWeight={2} >
                    </Polyline>
                    <Polygon
                        paths={triangleCoords}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2}
                        fillColor="#0000FF"
                        fillOpacity={0.35} />
                    <Marker
                        name={'Dolores park'}
                        position={{lat: 55.948749, lng: -3.200986}} />
                    <Marker />
                </Map> */}
                <Map google={this.props.google}
                    style={{width: '30.5vw', height: '40vh', position: 'absolute'}}
                    className={'map'}
                    zoom={14}>
                    <Polyline
                        paths={triangleCoords}
                        strokeColor="black"
                        //strokeOpacity={0.8}
                        //strokeWeight={2} 
                        />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc",
})(DriveMap);
 