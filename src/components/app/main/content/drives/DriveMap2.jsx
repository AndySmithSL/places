import React from "react"; 

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export const DriveMap2 = withScriptjs(withGoogleMap((props) => {
    return (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
        </GoogleMap>
    );
}));
  

//AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc