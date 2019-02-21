import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const style = {
  width: '100%',
  height: '100%'
}


// initialCenter={{
//     lat: 45.5122,
//     lng: -122.6587
//   }}
export class MapContainer extends React.Component {
  render(){
    console.log(this)
    return (
      <Map
        google={this.props.google}
        style={style}

        centerAroundCurrentLocation={true}
        zoom={12}>

        <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Working!</h1>
            </div>
          </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS_API)
})(MapContainer)
