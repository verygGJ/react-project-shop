import React from 'react';
import markerIcon from "../../../../images/marker.png";
import {Map, InfoWindow, Marker} from 'google-maps-react';

const locations = [
  {lat: 40.756795, lng: -73.954298},
  {lat: 42.756795, lng: -53.954298},
  {lat: 43.756795, lng: -53.954298},
  {lat: 44.756795, lng: -53.954298},
]

export class MapContainer extends React.Component {
  render() {
  const bounds = new window.google.maps.LatLngBounds();
  for (var i = 0; i < locations.length; i++) {
    bounds.extend(locations[i]);
  }
  return (
    <Map style={{height: '500px', width: '100%', position: 'relative'}}
        google={window.google}
        zoom={6}
        bounds={bounds}
        initialCenter={{
            lat: 42.756795,
            lng: -53.954298
          }}
    >
      {locations.map((location, index) => {
        return <Marker position={{ lat: location.lat, lng: location.lng }}
                       key={index}
                       icon={markerIcon}
                />
        }
      )}
    </Map>
  );
 }
}

class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts-page">
        <MapContainer />
      </div>
    );
  }
}
