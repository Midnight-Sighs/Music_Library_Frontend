import React from 'react';
import axios from 'axios';
import './DeleteSong.css';
 
const DeleteSong = (props) =>{

    const handleDeleteClick = (event) => {  
        deleteSong(props.song)
        resetSongList()
    }

    function resetSongList(){
      let deletedSong = props.song
      let songList = props.songs
      for(let i=0; i<songList.length; i++){
        if(songList[i].id === deletedSong){
          songList.splice(i, 1)
        }
      }
      let list = songList
      props.resetSongs(list);
    }

    const deleteSong = (song) => {
        try{
          axios.delete(`http://127.0.0.1:8000/music/${song}/`)
        }
        catch (ex){
          alert('Error reaching the database!')
        }
      }

      return(
        <div>
          <button className="d-button" onClick={handleDeleteClick}>Delete</button>
        </div>
      )

}

export default DeleteSong