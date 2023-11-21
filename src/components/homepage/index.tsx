import "./homepage.css";
import Landingimg from "../images/traveller.jpg";
import { Stack, Box, Button } from "@mui/material";
import { searchFlights } from "./searchFlights";

const HomePage = () => {
  return (
    <section>
      <Box
        sx={{
          backgroundImage: `url(${Landingimg})`,
          height: "100vh",
        }}
      >
        <Stack
          paddingLeft={5}
          paddingTop={4}
          sx={{
            display: "inline-flex",
          }}
          gap={2}
        >
          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Box>flights</Box>
            <Box>hotels</Box>
          </Stack>

          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Box>one way</Box>
            <Box>round way</Box>
            <Box>mulip city</Box>
          </Stack>

          <Box>From</Box>

          <Box>To</Box>

          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Box>departure date</Box>
            <Box>return date</Box>
          </Stack>

          <Button onClick={() => searchFlights}>Search Flights</Button>
        </Stack>
      </Box>
    </section>
  );
};

export default HomePage;
