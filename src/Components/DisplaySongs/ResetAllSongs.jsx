import React from 'react';
import './DisplaySongs.css'

const ResetAllSongs = (props) => {

    const buttonOnClick = (event) => {
        event.preventDefault()
        let list = props.songs
        props.resetSongs(list)
    }

    return (
        <div>
            <button className="reset-btn" onClick={buttonOnClick}>See All Songs</button> 
        </div>
    )
}

export default ResetAllSongs;