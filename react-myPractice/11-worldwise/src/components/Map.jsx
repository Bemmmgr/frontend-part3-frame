import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import { useState } from "react";

// 修复icon
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Map() {
  // 17016 - prommatic navigation with useNavigates
  const navigate = useNavigate();

  // 17015 - reading and searching a query string
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  const [mapPosition, setMapPosition] = useState([40, 0]);

  return (
    <div className={styles.mapContainer}>
      {/* 18011 - including a map using leaflet library */}
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition} icon={icon}>
          <Popup>A pretty CSS3 popup.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
