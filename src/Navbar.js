import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {

 //.classList.toggle("logdiv")
  
  return (

    
      <>
    <nav className="navbar" >
    <img className="imglogo" src="https://www.redditinc.com/assets/images/site/reddit-logo.png" alt="reddit"/><span className="redditlogo">reddit</span>
    <div className="div1">
    <img className="imglogo2" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-2.png"/>
    <input className="input" type="text"  placeholder="Serch Reddit"/>
    </div>
    <div className="GetApp">
      <button className="GetApppp">Get App</button>
    </div>
    
    <div className='headerNavbar' >
            {/* signout/ signin */}
            <Link to="/Login" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'  >Login</span>
                </div>
            </Link>
            </div>
    </nav>
   
    </>
    
  
    
  );
}

export default Navbar;
