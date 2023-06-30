import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "98%",
  height: "75vh",
  marginLeft: "17px",
  marginRight: "17px"
};

const center = {
  lat: 41.881832,
  lng: -87.623177,
};

const locations = [
  { lat: 41.8687, lng: -87.6226 },
  { lat: 41.9667, lng: -87.64608 },
  { lat: 41.8353, lng: -87.6073 },
  { lat: 41.92863, lng: -87.68899 },
];

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <LoadScript googleMapsApiKey="AIzaSyAHyZh4N32RsR4BQck4CyTXc2Knevf7bAY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {locations.map((location, index) => (
            <Marker key={index} position={{ lat: Number(location.lat), lng: Number(location.lng) }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default Dashboard;
