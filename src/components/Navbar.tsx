import "./Navbar.css";
import FaLogo from "./images/Logo/FlyAkeed English Logo Dark Mode.png"

const Navbar = () => {
    return (
<>
      <nav className="header">
         <img className="header__logo" src={FaLogo} alt="" /> 
   
         <div className="btn">
          <button className="corporate" >Corporate</button>
          <button className="login">Log In</button>
         </div>

      </nav>


         </>

    );

};

export default Navbar;