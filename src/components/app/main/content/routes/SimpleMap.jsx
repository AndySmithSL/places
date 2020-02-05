import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import Polyline from './Polyline'
import { styles } from './MapStyles';

import './SimpleMap.scss';

const SimpleMap = props => {
  const getMapOptions = maps => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: styles ,
    };
  };

  const { route } = props;
  const markers = [];

  route.places.forEach(place => {
    markers.push(<Marker lat={place.latitude} lng={place.longitude} name={place.name} color='black' key={place.id} />)
  })

  const [center, setCenter] = useState({lat: route.origin.latitude, lng: route.origin.longitude });
  const [zoom, setZoom] = useState(5);
  return (
      <div className="SimpleMap">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc' }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
        onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
