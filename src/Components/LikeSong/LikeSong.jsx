import React from 'react';
import axios from 'axios';
import './LikeSong.css';

const LikeSong = (props) => {

    const likeOnClick = (event) => {
        event.preventDefault();
        likeSong(props.song);
        resetSongs()
    }

    const resetSongs = () => {
        let list = props.songs;
        props.resetSongs(list);
    }


    const likeSong = (song) => {
        try{
            axios.put(`http://127.0.0.1:8000/music/${song}/getLikes`)
        }
        catch (ex){
            alert('Error reaching the database!')
          }
    }

    return(
        <div>
            <button className="l-button" onClick={likeOnClick}>Like</button>
        </div>
    );
}

export default LikeSong
