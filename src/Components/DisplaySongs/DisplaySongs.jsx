import React from 'react';
import DeleteSong from '../DeleteSong/DeleteSong'

const DisplaySongs = (props) => {
    
    return (
        <div>
        <h1>Display all Songs</h1>
              <table>
                  <tbody>
                    <tr>
                      <th>Song Title</th>
                      <th>Song Artist</th>
                      <th>Song Album</th>
                      <th>Song Genre</th>
                      <th>Song Release Date</th>
                      <th>Likes</th>
                    </tr>
                      {props.songs.map(function(song){
                          return (
                          <tr>
                              <td>{song.title}</td>
                              <td>{song.artist}</td>
                              <td>{song.album}</td>
                              <td>{song.genre}</td>
                              <td>{song.release_date}</td>
                              <td>{song.like_counter}</td>
                              <td><DeleteSong song={song.id} delete={props.delete} all={props.all} /></td>
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