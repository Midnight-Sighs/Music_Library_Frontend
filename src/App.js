import React, {Component} from 'react'
import './App.css';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: []
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

  render() { 
    return(
    <DisplaySongs songs={this.state.songs} />
    )
  }
}
 
export default App;
