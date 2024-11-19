import { Box, Typography } from "@mui/material";
import AppLayouts from "../components/layouts/AppLayouts";
import { Height } from "@mui/icons-material";

const Home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.1)"} Height={"100%"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayouts()(Home);
