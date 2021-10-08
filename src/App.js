import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import NewSong from './Components/NewSong/NewSong';
import SearchForm from './Components/SearchForm/SearchForm';

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

  removeSong = (deletedSong) =>{
    let tempSongs = this.state.songs
    tempSongs.splice(deletedSong)
    this.setState({
      songs : tempSongs
    })
  }

  addNewSong = (newSong) => {
    let tempSongs = this.state.songs
    tempSongs.push(newSong)
    this.setState({
        songs: tempSongs
    });
  }

  resetSongs = (list) => {
    this.setState({ 
      songs : list
     })
  }

  render() { 
    return(
      <div>
        <SearchForm songs={this.state.songs} resetSongs={this.resetSongs} />
        <DisplaySongs songs={this.state.songs} removeSong={this.removeSong} />
        <NewSong addNewSong={this.addNewSong} />
      </div>
    )
  }
}
 
export default App;
