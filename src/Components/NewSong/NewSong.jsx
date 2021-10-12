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
            like_counter: 0,
            defaultValue: '',
            errors: {
                release_year: ''
            }
         }
    }

    resetForm = () =>{
        this.setState({
            title: 'title', 
            artist: 'artist', 
            album: 'album', 
            genre: 'genre', 
            release_year: 'release_date',
            like_counter: 0
        })
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
    }

    handleChange = (event) =>{
        let errors = this.state.errors;
        if(event.target.name === 'release_year'){
            errors.release_year = event.target.value && event.target.value.length <4 ? 'You must provide 4 integers for the year' : null
        }
        this.setState({
            [event.target.name]: event.target.value, errors:errors
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
            <h1 className="mt-5" >Create a New Song</h1>
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label className="form-text">Title:</label></td> 
                            <td><input className="form-input" name="title" onChange={this.handleChange} defaultValue={this.defaultValue} placeholder="Title" /></td>
                        </tr>
                        <tr>
                            <td><label className="form-text">Artist:</label></td> 
                            <td><input className="form-input" name="artist" onChange={this.handleChange} placeholder="Artist" /></td>
                        </tr>
                        <tr>
                            <td><label className="form-text">Song Album:</label></td>
                            <td><input className="form-input" name="album" onChange={this.handleChange} placeholder="Album" /></td>
                        </tr>
                        <tr>
                            <td><label className="form-text">Genre(s):</label></td>
                            <td><input className="form-input" name="genre" onChange={this.handleChange} placeholder="Genre" /></td>
                        </tr>
                        <tr>
                            <td><label className="form-text" >Release Year (YYYY):</label></td>
                            <td><input className="form-input" name="release_year"  type="number" pattern="[0-9]" inputMode="numeric" onChange={this.handleChange} placeholder="Release Year" /></td>
                            {this.state.errors.release_year ? <td style={{color:'orange'}}>{this.state.errors.release_year}</td> : ''}
                        </tr>
                        <tr>
                            <td col-span="2"><p><button className="new-song-btn" type="submit">Add New Song</button></p></td>
                            <td col-span="2"><p><button className="new-song-btn" type="button" onClick={this.resetForm}>Reset Form</button></p></td>
                       </tr>
                    </tbody>
                </table>
            </form>
        </div> );
    }
}
 
export default NewSong;