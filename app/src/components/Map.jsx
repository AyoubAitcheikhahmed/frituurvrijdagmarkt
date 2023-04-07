import React from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./Map.css";
const apikey = process.env.GOOGLE_API



// const location = {
//     address: 'Vrijdagmarkt 6, 9000 Gent',
//     lat: ,
//     lng: ,
// }



const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB2oHQRQDdFseVpiyTn_Cu8wp2dHo0Z3C0',
  });
  const center = useMemo(() => ({ lat: 51.05730593017457, lng: 3.725127676864607 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={20}
        />
      )}
    </div>
  );
};

export default Map;
