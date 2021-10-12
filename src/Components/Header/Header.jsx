import React from 'react';
import concertLights from '../../Images/ConcertLights.jpg'
import './Header.css'

const Header = () => {

    return(
        <div className="container-fluid" id='header-container'>
            <img src={concertLights} id="concertLights" alt="blue concert lights above a crowd"></img>
            <div className="top-right-text">Music Library</div>
        </div>
    )
}

export default Header