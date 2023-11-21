import "./homepage.css";
import Landingimg from "../images/traveller.jpg";
import { Stack, Box, Button, TextField ,ButtonGroup, InputAdornment, } from "@mui/material";
import { searchFlights } from "./searchFlights";
import { Link } from 'react-router-dom'
import { useState} from "react";
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';


const HomePage = () => {
  const [selectedBtn, setSelectedBtn] = useState(-1);
  return (
    <section >
      
      <Box
        sx={{
          backgroundImage: `url(${Landingimg})`,
          height:'85vh'
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
            <ButtonGroup variant="contained" aria-label="outlined primary button group" >
              
            <Button color={selectedBtn === 1 ? "secondary" : "primary"} onClick={()=>setSelectedBtn(1)} >flights</Button>
            <Button color={selectedBtn === 2 ? "secondary" : "primary"} onClick={()=>setSelectedBtn(2)} >hotels</Button>
            </ButtonGroup>
            
          </Stack>

          <Stack direction="row" justifyContent="space-between" gap={2}>
            <ButtonGroup  variant="contained" aria-label="outlined primary button group">
            <Button color={selectedBtn === 1 ? "secondary" : "primary"} onClick={()=>setSelectedBtn(1)} >one way</Button>
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
             
          
          <Box>sdas asd</Box>
            <Box>return date</Box>
          </Stack>
           <Box>
           <Link to='search'>
          
          <Button variant="contained" onClick={() => searchFlights}>Search Flights</Button>
          </Link>
           </Box>
           
        </Stack>
      </Box>
    </section>
  );
};

export default HomePage;
