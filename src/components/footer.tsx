import fly from "./images/FlyAkeed Arabic Logo.png"
import './footer.css'
import app from './images/apple_new.png'
import play from './images/google_new.png'
import insta from './images/new_instagram.svg'
import face from './images/new_facebook.svg'
import twitter from './images/new_twitter.svg'
import linkedin from './images/new_linkedin.svg'

function Footer() {
    return(
        <>
        <section className="footer">
            <div>
                    
          <img className="fly-img" src={fly} alt="" />

            </div>
   <div>
     
  <ul className="list" >
    <h6>FlyAkeed</h6>
    <li>About Us</li>
    <li>FlyAkeed for Business</li>
  </ul>
     </div>
     <div>
     <ul className="list" >
    <h6>Support</h6>
    <li>Contact Us</li>
    <li>FAQ</li>
  </ul>

     </div>
     <div>
     <ul className="list" >
    <h6 >Legal</h6>
    <li>Terms and Conditions</li>
    <li>Privacy Policy</li>
  </ul>
     </div>

     <div>
     <ul className="list" >
        
        <h6 >Download</h6> 
            <li>
            <img className="img1" src={app} alt="" />
            </li>
            <li>
            <img className="img1" src={play} alt="" />
            </li>

    
     </ul>

     </div>
        </section>
       <section className="call">
        <div >
            <p>Call us at: 920000091</p>
        </div>
        <div >
            <p>FlyAkeed © 2023 | All Rights Reserved</p>
        </div>
        <div >
            <img src={insta} alt="" />
            <img src={face} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
        </div>
       </section>
       </>
    )
}

export default Footer