import React from 'react';
import concertLights from '../../Images/ConcertLights.jpg'
import './Header.css'

const Header = () => {

    return(
        <div class="container-fluid" id='header-container'>
            <img src={concertLights} id="concertLights"></img>
            <div class="top-right-text">Music Library</div>
        </div>
    )
}

export default Header