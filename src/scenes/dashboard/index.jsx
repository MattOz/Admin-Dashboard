import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">

            {/* insert map here */}

            </Box>
        </Box>
    );
};

export default Dashboard;