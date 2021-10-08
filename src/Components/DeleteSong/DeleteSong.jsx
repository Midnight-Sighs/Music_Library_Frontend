import React from 'react';
import axios from 'axios';
 
const DeleteSong = (props) =>{

    const handleDeleteClick = (event) => {
        deleteSong(props.song)
      }

    const deleteSong = (song) => {
        try{
          axios.delete(`http://127.0.0.1:8000/music/${song}/`)
          alert('Song deleted successfully')
        }
        catch (ex){
          alert('Error reaching the database!')
        }
        
      }
      
      return(
        <div>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )

}

export default DeleteSong