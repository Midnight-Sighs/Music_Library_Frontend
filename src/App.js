import React, {Component} from 'react'
import './App.css';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs'
import NewSong from './Components/NewSong/NewSong'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: [],
     }
  }

  componentDidMount() {
    this.getAllSongs();
  }

  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs: response.data
    });
  }

  async deleteSong(song) {
    try{
      await axios.delete(`http://127.0.0.1:8000/music/${song}/`)
      alert('Song deleted successfully')
    }
    catch (ex){
      alert('Error reaching the database!')
    }
  }

  addNewSong = (newSong) => {
    debugger
    let tempSongs = this.state.songs
    tempSongs.push(newSong)
    this.setState({
        songs: tempSongs
    });
}
  

  render() { 
    return(
      <div>
        <DisplaySongs songs={this.state.songs} delete={this.deleteSong} />
        <NewSong addNewSong={this.addNewSong} />
      </div>
    )
  }
}
 
export default App;
