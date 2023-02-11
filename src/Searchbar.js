import React from 'react';
import { Link } from 'react-router-dom';
import './searchbar.css'
import Logout from './Logout';

function Searchbar(){

    return(
<>
<Link to='/Logout'>
    <button className='logout' >Logout</button>
    </Link>
<div className='divvvv'>
<Link to='/Linkcreatepost'>
    <input className='searchbar' placeholder='Create post' ></input>
    </Link>
    
    </div>
    
</>
    )
}
export default Searchbar;