import "./Navbar.css";
import FaLogo from "../images/Logo/FlyAkeed English Logo Dark Mode.png";
import { Stack, Box } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <nav className="header">
        <Stack direction="row" justifyContent='space-between'   width="100%">
          <Box>
            <img className="header__logo" src={FaLogo} alt="" />
          </Box>

          <Stack direction="row" color="white" gap={2} alignSelf="center">
            <Box>SAR</Box>
            <Box>العربية</Box>
          </Stack>

          <Box display="inline-flex" alignSelf="center">
            <button className="corporate">Corporate</button>
            <button className="login">Log In</button>
          </Box>
        </Stack>
      </nav>
    </>
  );
};

export default Navbar;
