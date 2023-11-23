import blockqoute from "../images/blockquote.png";
import "./blockqoute.css";
import sp from "../images/testimoni-sparator.png";
function BlockQoute() {
  return (
    <>
      <h1 className="text"> Testimonials </h1>

      <section className="blockqoute">
        <div className="clint1">
          <img className="qouteimg" src={blockqoute} alt="" />

          <p className="px-2">
            FlyAkeed made my life easier. We used to work with agents in the
            past but with FlyAkeed, I can get notified with requests with
            approval instead of waiting 1-2 days for confirmation that they can
            travel.{" "}
          </p>

         
        </div>

        <div className="clint2">
          <img className="qouteimg" src={blockqoute} alt=""></img>
          <p className="px-2">
            In the past, everything was done by papers and we had to contact
            agents through email. The process used to take too long and there
            was no way to monitor, but with FlyAkeed, everything is seamless and
            transparent
          </p>
        </div>
        <div className="clint3">
        <img className="qouteimg" src={blockqoute} alt=""></img>
          <p className="px-2">
            As a company, one of the important features we want is having a
            dashboard to monitor all flights and seeing their costs and times
          </p>
        </div>
      </section>
    </>
  );
}
export default BlockQoute;
