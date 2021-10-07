import React from 'react';
 
const DeleteSong = (props) =>{

    const handleClick = (event) => {
        props.delete(props.song)
        alert('Deleted Successfully')
      }

      return(
        <div>
          <button onClick={handleClick}>Delete</button>
        </div>
      )

}

export default DeleteSong