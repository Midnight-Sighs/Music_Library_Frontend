import React, {Component} from 'react'
import './App.css';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: [],
     }
  }

  componentDidMount() {
    this.getAllSongs();
    console.log(this.state.songs)
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
    }
    catch (ex){
      alert('Error reaching the database!')
    }
  }

  render() { 
    return(
    <DisplaySongs songs={this.state.songs} delete={this.deleteSong} />
    )
  }
}
 
export default App;
