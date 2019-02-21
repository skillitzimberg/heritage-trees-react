import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

const style = {
  width: '100%',
  height: '100%'
}

const markers = [{
title : "IRCO",
position: {lat: 45.52687,
lng: -122.556986}
},
{
title : "Earl Boyles Elementary School",
position: {lat: 45.494709,
lng: -122.551952}
}];
// initialCenter={{
//     lat: 45.5122,
//     lng: -122.6587
//   }}
export class MapContainer extends React.Component {

  render(){
    // console.log(props)
    return (
      <Map
        google={this.props.google}
        style={style}
        centerAroundCurrentLocation={true}
        zoom={12}>

        {markers.map((marker, index) =>
          <Marker title={marker.title}
            position={marker.position}
            key={index} />
        )}
      </Map>
    )
  }
}

MapContainer.propTypes = {
  markers: PropTypes.array
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS_API)
})(MapContainer)
