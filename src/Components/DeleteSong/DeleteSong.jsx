import React from 'react';
 
const DeleteSong = (props) =>{

    const handleDeleteClick = (event) => {
        props.delete(props.song)
      }
      
      return(
        <div>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )

}

export default DeleteSong