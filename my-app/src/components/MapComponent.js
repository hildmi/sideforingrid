import React from "react";
import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent = ({ center, markerPosition }) => {
  const [mapCenter, setMapCenter] = useState(center);
  const [markerPos, setMarkerPos] = useState(markerPosition);

  useEffect(() => {
    setMapCenter(center);
  }, [center]);

  useEffect(() => {
    setMarkerPos(markerPosition);
  }, [markerPosition]);

  const redMarkerIcon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

  return (
    <LoadScript googleMapsApiKey="AIzaSyA9dIVo6YHybhdF0wtWH05v8qLvEW3GteM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={16}
      >
        <Marker position={markerPos} icon={redMarkerIcon} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
