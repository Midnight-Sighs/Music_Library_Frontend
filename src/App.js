import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import NewSong from './Components/NewSong/NewSong';
import SearchForm from './Components/SearchForm/SearchForm';
import ResetAllSongs from './Components/DisplaySongs/ResetAllSongs';
import Header from './Components/Header/Header';
import StickyNav from './Components/StickyNav/StickyNav.'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: [],
      songsCopy: [],
     }
  }

  componentDidMount() {
    this.getAllSongs();
  }

  async getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    this.setState({
      songs: response.data,
      songsCopy: response.data,
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
      <div className='background'>
        <div id="header" className="container-fluid">
          <Header />
          <StickyNav />
          <div className='row'>
            <div className = "col-lg-8 col-md-10 col-sm-12">
              <DisplaySongs songs={this.state.songs} removeSong={this.removeSong} resetSongs={this.resetSongs}/>
            </div>
            <div className= "col-lg-4 col-md-2 col-sm-row mt-5">
            <div id="searchForm"></div>
              <SearchForm songs={this.state.songs} resetSongs={this.resetSongs} />
              <NewSong addNewSong={this.addNewSong} />
              <ResetAllSongs songs={this.state.songsCopy} resetSongs={this.resetSongs} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 
export default App;
