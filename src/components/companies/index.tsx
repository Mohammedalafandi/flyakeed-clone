import "./companies.css";
import alibaba from "../images/Alibab Cloud.png";
import onsor from "../images/OM.png";
import stc from "../images/Stc Group.png";
import neom from "../images/NEOM.png";
import jok from "../images/Jock Club.png";
import knowliom from "../images/Knowliom.png";
function Companies() {
  return (
    <div className="comp">
      <h2>Join the Elite Ranks of the Most Impressive Companies Trusting Us</h2>
      <div className="logo">
        <img className="a" src={alibaba} alt="" />
        <img className="b" src={onsor} alt="" />
        <img className="c" src={stc} alt="" />
        <img className="d" src={neom} alt="" />
        <img className="e" src={jok} alt="" />
        <img className="f" src={knowliom} alt="" />
      </div>
    </div>
  );
}

export default Companies;
