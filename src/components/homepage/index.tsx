import "./homepage.css";
import Landingimg from "../images/traveller.jpg";
import {
  Stack,
  Box,
  Button,
  TextField,
  ButtonGroup,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [selectedBtn, setSelectedBtn] = useState(-1);
  return (
    <section>
      <Box
        sx={{
          backgroundImage: `url(${Landingimg})`,
          height: "85vh",
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
          <Stack marginLeft={"100px"} direction="row" justifyContent="space-between" gap={2}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                color={selectedBtn === 1 ? "secondary" : "primary"}
                onClick={() => setSelectedBtn(1)}
              >
                flights
              </Button>
              <Button
                color={selectedBtn === 2 ? "secondary" : "primary"}
                onClick={() => setSelectedBtn(2)}
              >
                hotels
              </Button>
            </ButtonGroup>
          </Stack>

          <Stack marginLeft={"30px"} direction="row" justifyContent="space-between" gap={2}>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                color={selectedBtn === 1 ? "secondary" : "primary"}
                onClick={() => setSelectedBtn(1)}
              >
                one way
              </Button>
              <Button>round way</Button>
              <Button>mulip city</Button>
            </ButtonGroup>
          </Stack>

          <TextField
          
            id="input-with-icon-textfield"
            label="From"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTakeoffIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <TextField
            id="input-with-icon-textfield"
            label="TO"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FlightLandIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />

          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Box></Box>
            <Box></Box>
          </Stack>
          <Box marginLeft={"110px"}>
            <Button
            
              variant="contained"  
              onClick={() => {
                const origin = "JFK"; 
                const destination = "LHR"; 
                const departureDate = "2023-12-15"; 
                navigate(
                  `/search?origin=${origin}&destination=${destination}&departureDate=${departureDate}`
                );
              }}
            >
              Search Flights
            </Button>
          </Box>
        </Stack>
      </Box>
    </section>
  );
};

export default HomePage;
