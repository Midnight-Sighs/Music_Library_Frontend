import React, {Component} from 'react';
import axios from 'axios';
import './NewSong.css'

class NewSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title', 
            artist: 'artist', 
            album: 'album', 
            genre: 'genre', 
            release_year: 'release_date',
            like_counter: 0
         }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        let newSong ={
            "title": this.state.title,
            "artist": this.state.artist,
            "album": this.state.album,
            "genre": this.state.genre,
            "release_year": this.state.release_year,
            "like_counter": this.state.like_counter
        }
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/music/new', newSong)
        this.props.addNewSong(this.state)
    }

    render() { 
        return ( 
        <div>
            <h1 class="mt-5" >Create a New Song</h1>
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label class="form-text" for="title">Title:</label></td> 
                            <td><input class="form-input" name="title" onChange={this.handleChange} placeholder="Title" /></td>
                        </tr>
                        <tr>
                            <td><label class="form-text" for="artist">Artist:</label></td> 
                            <td><input class="form-input" name="artist" onChange={this.handleChange} placeholder="Artist" /></td>
                        </tr>
                        <tr>
                            <td><label class="form-text" for="album">Song Album:</label></td>
                            <td><input class="form-input" name="album" onChange={this.handleChange} placeholder="Album" /></td>
                        </tr>
                        <tr>
                            <td><label class="form-text" for="genre">Genre(s):</label></td>
                            <td><input class="form-input" name="genre" onChange={this.handleChange} placeholder="Genre" /></td>
                        </tr>
                        <tr>
                            <td><label class="form-text" for="release_year">Release Year (YYYY):</label></td>
                            <td><input class="form-input" name="release_year" onChange={this.handleChange} placeholder="Release Year" /></td>
                        </tr>
                        <tr>
                            <td col-span="2"><p><button class="new-song-btn" type="submit">Add New Song</button></p></td>
                        </tr>
                        <hr />
                    </tbody>
                </table>
            </form>
        </div> );
    }
}
 
export default NewSong;