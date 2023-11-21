import { Link } from 'react-router-dom'
import './searchpage.css'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';






function SearchFlight(){
    return(
        
        
       <section  className='search'>
        <div>
          
        <nav className="nav2">
          <Link to="/">
          <IconButton  aria-label="delete" size="small">
         <ArrowBackIcon fontSize="large" />
         </IconButton>
          </Link>
          
        <div className="btn1">
          <button className="change" >Change Search</button>
          
         </div>
</nav>
        </div>
         <div className='leftbar' >
          
  <div className='stops'>
  <ul className='liststyle'>
       <h6>Stops</h6>
    <li><input type="checkbox"/> Direct Fly</li>
    <li><input type="checkbox"/> 1 Stop</li>
    <hr className='line'/>
  </ul>
  </div>
 
     <div className='airlines' >
      
     <ul className='liststyle'>
       <h6>AirLines</h6>
    <li><input type="checkbox"/> Fly Dubai</li>
    <li><input type="checkbox"/> Emirates </li>
    <li><input type="checkbox"/> Gulf Air </li>
    <hr className='line'/>
    
  </ul>
      </div>  
  
           <div className='price'>
            <h6>Price</h6>
            <p>SAR</p>
            <input type="range" min="1" max="100" value="50"></input>
            <hr className='line'/>
           </div>
           <div>
           <ul className='liststyle'>
       <h6>AirLines</h6>
    <li><input type="checkbox"/>  12:00 MN - 4:59 AM</li>
    <li><input type="checkbox"/>  05:00 AM - 4:59 AM</li>
    <li><input type="checkbox"/>  12:00 NN - 4:59 PM</li>
    <li><input type="checkbox"/>  5:00 PM - 11:59 PM</li>
    <hr className='line'/>
    
  </ul>

  </div>
         
         </div>
       
        
       </section>
       
    )
}

export default SearchFlight 