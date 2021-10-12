import React, { useState } from 'react';
import DeleteSong from '../DeleteSong/DeleteSong';
import LikeSong from '../LikeSong/LikeSong';
import './DisplaySongs.css';
import SingleSong from '../SingleSong/SingleSong'

const DisplaySongs = (props) => {

    function sendResetToApp(list){
        props.resetSongs(list)
    }

    return (
        <div className='container mb-5' id='music-table'>
        <h1>Song Library</h1>
              <table key="display Table">
                  {props.songs.map(function(song){
                      return (
                      <tbody>
                        <tr>
                          <td className="mbox" key={song.title}><p>{song.title}</p></td>
                          <td className="mbox-utility"><LikeSong song={song.id} songs={props.songs} resetSongs={sendResetToApp} /></td>
                          <td className="mbox-utility"><DeleteSong song={song.id} removeSong={props} resetSongs={sendResetToApp} songs={props.songs}/></td>
                        </tr>
                        <tr>
                          <td className="mdetails" colSpan="3"><SingleSong song={song} songs={props.songs} resetSongs={sendResetToApp} /></td>
                        </tr>
                      </tbody>
                      )
                  })}
              </table>
          </div>
      )
}

export default DisplaySongs;