import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

import './SimpleMap.scss';

const SimpleMap = props => {
  const getMapOptions = maps => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  const { route } = props;
  const markers = [];

  route.places.forEach(place => {
    markers.push(<Marker lat={place.latitude} lng={place.longitude} name={place.name} color='red' key={place.id} />)
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
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
