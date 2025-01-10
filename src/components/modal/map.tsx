import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { LatLngExpression } from "leaflet";

interface MapProps {
  latitude: string;
  longitude: string;
  profilePhoto: string;
}

const Map = ({ latitude, longitude, profilePhoto }: MapProps) => {
  if (typeof window === "undefined") {
    return null;
  }

  const latitudeToNumber = parseFloat(latitude);
  const longitudeToNumber = parseFloat(longitude);
  const position: LatLngExpression = [latitudeToNumber, longitudeToNumber];

  const markerIcon = new L.DivIcon({
    html: `<img src=${profilePhoto} style="width: 50px; height: 50px; border: 4px solid red; border-radius: 50%;">`,
    className: "",
    iconAnchor: [25, 25],
    popupAnchor: [0, -25],
  });

  return (
    <MapContainer
      center={position}
      zoom={5}
      style={{ width: "100%", height: "400px" }}
      worldCopyJump={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={markerIcon}>
        <Popup>
          User coordinates: {latitude}, {longitude}.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
