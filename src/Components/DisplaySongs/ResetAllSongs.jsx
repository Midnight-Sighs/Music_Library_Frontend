import React from 'react';

const ResetAllSongs = (props) => {

    const buttonOnClick = (event) => {
        event.preventDefault()
        let list = props.songs
        props.resetSongs(list)
    }

    return (
        <div>
            <button onClick={buttonOnClick}>See All Songs</button> 
        </div>
    )
}

export default ResetAllSongs;