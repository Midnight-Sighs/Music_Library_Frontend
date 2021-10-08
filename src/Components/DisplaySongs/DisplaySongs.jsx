import React, { Component } from 'react';
import DeleteSong from '../DeleteSong/DeleteSong'
import LikeSong from '../LikeSong/LikeSong';

const DisplaySongs = (props) => {
   
    function sendResetToApp(list){
        props.resetSongs(list)
    }

    return (
        <div>
        <h1>Display all Songs</h1>
              <table>
                  <tbody>
                    <tr>
                      <th>Song Title</th>
                      <th>Song Artist</th>
                      <th>Song Album</th>
                      <th>Song Genre(s)</th>
                      <th>Release Year</th>
                      <th>Likes</th>
                    </tr>
                      {props.songs.map(function(song){
                          return (
                          <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_year}</td>
                            <td>{song.like_counter}</td>
                            <td><DeleteSong song={song.id} removeSong={props} resetSongs={sendResetToApp} songs={props.songs}/></td>
                            <td><LikeSong song={song.id} songs={props.songs} resetSongs={sendResetToApp} /></td>
                          </tr>
                          )
                      })}
                  </tbody>
              </table>
              <hr />
          </div>
      )
}

export default DisplaySongs