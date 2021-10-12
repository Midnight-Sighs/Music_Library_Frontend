import React, { Component } from 'react'
import './SearchForm.css'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchedSongs: [],
            searchType: 'artist',
            searchTerm: '',
         }
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

      submitFilterType = (event) => {
        event.preventDefault();
        this.setState({
          searchType: event.target.elements.searchTypes.value
        }, ()=> console.log(this.state.searchType))
      }
      
      searchSongs = () => {
        let searchType = this.state.searchType
        let searchTerm = this.state.searchTerm.toLowerCase()
        let newSongList = this.state.searchedSongs
        let songs = this.props.songs
        songs.filter(function(foundSong){
          switch(searchType){
            case "artist":
              if(foundSong.artist.toLowerCase() === searchTerm){
                newSongList.push(foundSong)}
              break;
            case "title":
            if(foundSong.title.toLowerCase() === searchTerm){
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
            let list = this.state.searchedSongs;
            this.props.resetSongs(list)
        }
      }

    render() { 
        return ( 
        <div>
          <h1 className="mt-5">Search Songs</h1>
            <form onSubmit = {this.submitFilterType}>
              <select className="search-type-dd"name="searchTypes">
                <option value="artist">Artist</option>
                <option value="album">Album</option>
                <option value="title">Title</option>
                <option value="genre">Genre</option>
                <option value="release_year">Release Year</option>
              </select>
              <button className="s-l-button" type="submit" value="submit" >Lock In Search Type</button>
            </form>

            <form onSubmit={this.searchSubmit}>
              <input className="search-term-input" type="text" placeholder="Type Search Here" onChange={this.searchOnChange}></input>
              <button className="s-l-button" type="submit">Search</button>
            </form>
        </div>
        );
    }
}
 
export default SearchForm;