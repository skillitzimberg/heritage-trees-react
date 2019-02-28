import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const style = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends React.Component {

  constructor(props){
    super(props)
    console.log(props)
  }


  render(){
    return (
      <Map
        google={this.props.google}
        style={style}
        initialCenter={{
            lat: 45.5122,
            lng: -122.6587
          }}
        zoom={12}>
        {this.props.treeData.map((marker, index) =>
          <Marker title={marker.properties.COMMON}
            position={{lat: marker.properties.LAT, lng: marker.properties.LON}}
            key={index} />
        )}
      </Map>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS_API)
})(MapContainer)
