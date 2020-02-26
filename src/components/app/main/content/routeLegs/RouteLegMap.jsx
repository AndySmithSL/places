import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

import Marker from '../common/Marker';
import Polyline from '../common/Polyline';

import { styles } from '../../../../styles/MapStyles';
import './RouteLegMap.scss';

class RouteLegMap extends Component {

  constructor (props) {
    super(props)

    const { routeLeg } = this.props

    this.state = {
      routeLeg: routeLeg,
      mapsLoaded: false,
      map: null,
      maps: null
    }
  }

  onMapLoaded (map, maps) {
    //this.fitBounds(map, maps)
    this.setState({
      ...this.state,
      mapsLoaded: true,
      map: map,
      maps: maps
    })
  }

  fitBounds (map, maps) {
    var bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  afterMapLoadChanges () {

    const lines = [];
    const markers = [];
    const { routeLeg } = this.props

    markers.push({ lat: routeLeg.origin.latitude, lng: routeLeg.origin.longitude })
    markers.push({ lat: routeLeg.destination.latitude, lng: routeLeg.destination.longitude })

    lines.push(<Polyline
        map={this.state.map}
        maps={this.state.maps}
        markers={markers} />)
    
    return (
      <div style={{display: 'none'}}>
        {lines}
      </div>
    )
  }

  render() {

    const getMapOptions = maps => {
      return {
        disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: styles,
      };
    };

    const { routeLeg } = this.props
    //const [ centre ] = useState({lat: route.origin.latitude, lng: route.origin.longitude });
    const centre = { lat: routeLeg.origin.latitude, lng: routeLeg.origin.longitude };
    const zoom = 6;

    console.log(routeLeg.origin.latitude)

    const markers = [];

    markers.push(<Marker lat={routeLeg.origin.latitude} lng={routeLeg.origin.longitude} name={routeLeg.origin.name} color='black' key={routeLeg.origin.id} />)
    markers.push(<Marker lat={routeLeg.destination.latitude} lng={routeLeg.destination.longitude} name={routeLeg.destination.name} color='black' key={routeLeg.destination.id} />)

    return (
      <div className="RouteLegMap">
        <GoogleMap
          bootstrapURLKeys={{key: 'AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc'}}
          defaultCenter={centre}
          defaultZoom={zoom}
          onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}
          options={getMapOptions}>
          {markers}
          {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
        </GoogleMap>
      </div>
    );
  }
}

export default RouteLegMap;
