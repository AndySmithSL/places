import React, { Component } from 'react'
import GoogleMap from 'google-map-react'

import Marker from './Marker'
import Polyline from './Polyline'

class SimpleMap2 extends Component {

  constructor (props) {
    super(props)

    const { route } = this.props

    this.state = {
      route: route,
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

    const lines = []
    const { route } = this.props

    route.routeLegs.forEach(leg => {
      const markers = [];
      markers.push({ lat: leg.originLat, lng: leg.originLng })
      markers.push({ lat: leg.destinationLat, lng: leg.destinationLng })

      lines.push(<Polyline
        map={this.state.map}
        maps={this.state.maps}
        markers={markers} />)
    })

    //const leg = route.routeLegs[0]

    //console.log(leg.originLat)
    //console.log(leg.originLng)

    //const markers = [];
    //markers.push({ lat: leg.originLat, lng: leg.originLng })
    //markers.push({ lat: leg.destinationLat, lng: leg.destinationLng })

    //lines.push(<Polyline
    //  map={this.state.map}
    //  maps={this.state.maps}
    //  markers={markers} />)

    return (
      <div style={{display: 'none'}}>
        {lines}
      </div>
    )
  }

  render () {

    const { route } = this.props
    //const [ centre ] = useState({lat: route.origin.latitude, lng: route.origin.longitude });
    const centre = { lat: route.origin.latitude, lng: route.origin.longitude };
    const zoom = 6;

    const markers = [];
    route.places.forEach(place => {
      markers.push(<Marker lat={place.latitude} lng={place.longitude} name={place.name} color='black' key={place.id} />)
    })

    return (
      <div className="SimpleMap">
        <GoogleMap
          bootstrapURLKeys={{key: 'AIzaSyAiEv5RMy0d7cDM7fhZPHFrBD7weVs1DFc'}}
          defaultCenter={centre}
          defaultZoom={zoom}
          onGoogleApiLoaded={({map, maps}) => this.onMapLoaded(map, maps)}>
          {markers}
          {this.state.mapsLoaded ? this.afterMapLoadChanges() : ''}
        </GoogleMap>
      </div>
    )
  }
}

export default SimpleMap2
