import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './components/footer'
import LandingPage from './components/landingPage'
import SearchFlight from './components/searchpage'
function App() {
 

  return (
    <div className='app'>

    
    
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='search' element={<SearchFlight/>}/>
   </Routes>
   <Footer />
   </BrowserRouter>
   </div>
 
   
    
     
   
  )
}

export default App
