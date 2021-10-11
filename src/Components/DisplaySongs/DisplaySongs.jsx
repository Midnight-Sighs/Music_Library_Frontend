import React, { useState } from 'react';
import DeleteSong from '../DeleteSong/DeleteSong';
import LikeSong from '../LikeSong/LikeSong';
import './DisplaySongs.css';
import SingleSong from '../SingleSong/SingleSong'
import Modal from '../EditSong/Modal'

const DisplaySongs = (props) => {
    const [show, setShow] = useState(false)
  
    function sendResetToApp(list){
        props.resetSongs(list)
    }

    return (
        <div class='container' id='music-table'>
        <h1>Song Library</h1>
              <table>
                  {props.songs.map(function(song){
                      return (
                      <tbody>
                        <tr>
                          <td class="mbox"><p>{song.title}</p></td>
                          <td class="mbox-utility"><DeleteSong song={song.id} removeSong={props} resetSongs={sendResetToApp} songs={props.songs}/></td>
                          <td class="mbox-utility"><LikeSong song={song.id} songs={props.songs} resetSongs={sendResetToApp} /></td>
                          <td class="mbox-utility"><button class="mbtn" onClick={() => setShow(true)}>Edit</button><Modal onClose={() => setShow(false)} show={show}/></td>
                        </tr>
                        <tr>
                          
                          <td class="mdetails" colspan="3"><SingleSong song={song} songs={props.songs} resetSongs={sendResetToApp} /></td>
                        </tr>
                      </tbody>
                      )
                  })}
              </table>
              <hr />
          </div>
      )
}

export default DisplaySongs;