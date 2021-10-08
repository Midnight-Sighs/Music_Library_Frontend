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
      searchedSongs: [],
      searchType: 'artist',
      searchTerm: '',
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

  searchOnChange = (event) => {
    this.setState({ 
      searchTerm : event.target.value 
    })
  }

  searchSubmit = (event) => {
    event.preventDefault();
    this.searchSongs()
  }

  searchSongs = () => {
    let searchType = this.state.searchType
    let searchTerm = this.state.searchTerm.toLowerCase()
    let newSongList = this.state.searchedSongs
    this.state.songs.filter(function(foundSong){
      debugger
      switch(searchType){
        case "artist":
          if(foundSong.artist.toLowerCase() === searchTerm){
            newSongList.push(foundSong)}
          break;
        case "album":
          if(foundSong.album.toLowerCase() === searchTerm){
            newSongList.push(foundSong)};
          break;
        case "genre":
          if(foundSong.genre.toLowerCase().includes(searchTerm)){
            newSongList.push(foundSong)};
        break;
        case "release_year":
          if(foundSong.release_year === searchTerm){
            newSongList.push(foundSong)};
          break;
        default:
          break;
      }
    })
    if(newSongList.length === 0){
      alert('Your search yielded no results')
    }
    else{
      this.setState({
        songs : newSongList
      })
    }
  }

  submitFilterType = (event) => {
    event.preventDefault();
    this.setState({
      searchType: event.target.elements.searchTypes.value
    }, ()=> console.log(this.state.searchType))
  }

  render() { 
    return(
      <div>
        <form onSubmit = {this.submitFilterType}>
          <select name="searchTypes">
            <option value="artist">Artist</option>
            <option value="title">Title</option>
            <option value="genre">Genre</option>
            <option value="release_year">Release Year</option>
          </select>
          <button type="submit" value="submit" >Lock In Search Type</button>
        </form>
        <form onSubmit={this.searchSubmit}>
          <input type="text" placeholder="Type Search Here" onChange={this.searchOnChange}></input>
          <button type="submit">Search</button>
        </form>
        <DisplaySongs songs={this.state.songs} removeSong={this.removeSong} />
        <NewSong addNewSong={this.addNewSong} />
      </div>
    )
  }
}
 
export default App;
