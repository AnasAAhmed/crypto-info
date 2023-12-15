import {BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Header from "./componenets/Header";
import Home from "./componenets/Home";
import Coin from "./componenets/Coin";
import Coindetails from "./componenets/Coindetails";
import Exchange from "./componenets/Exchange";
import Footer from "./componenets/Footer";







function App() {
  

 
   
     
  
  
  
  return (
    <> 
    <Router> 
      <Header/>
      
      <Routes> 
        <Route  exact path="/crypto-info" element={ <Home/>}/>      
        
        <Route  path="/coin"  element={ <Coin/>}/>      
        <Route  path="/exchange"  element={ <Exchange/>}/>
        <Route  path="/coin/:id"  element={ <Coindetails/>}/>
       

      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
