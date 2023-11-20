import phone from "../images/phone.png";
import "./body.css";
function Body() {
  return (
    <section>
      <div className="section2">
        <div>
          <h1 className="h1">Seamless Corporate Travel Experience</h1>
          <p>
            FlyAkeed’s solution offers comprehensive travel services and
            innovative solutions for corporates and their employees to help them
            achieve the ultimate booking experience when traveling for work.
          </p>
        </div>

        <img className="phone-img" src={phone} alt="" />
      </div>
    </section>
  );
}

export default Body;
