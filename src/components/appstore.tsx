import flogo from  "./images/landingphone.svg"
import './appstore.css'
import apple from './images/apple_new.png'
import google from './images/google_new.png'



function AppStore(){
    return(
        <section>
            <div className="section3">
           
            <div>
           <img className="p-image"  src={flogo}  />
           </div>
            <div className="store-tex">
            <h2 className="text">
              <b>
                Book Flights Anytime, Anywhere with the<br/> Convenience of Our
                Downloadable App
              </b>
            </h2>
            <div className="store-image">
                <img className="img"
                  src={apple}
                 
                  
                  alt="apple"
                />
              
           
                <img className="img"
                  src={google}
                  
                  alt="goolge"
                />
            </div>
            </div>
        
           
           </div>
    
      </section>
      
      
    )
}

export default AppStore