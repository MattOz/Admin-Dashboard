import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 41.881832,
  lng: -87.623177,
};

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <LoadScript googleMapsApiKey="AIzaSyCzO6Fxi3JJdhu5jBl5VsgrPV473-8Rw7M">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default Dashboard;
