import React, { Component } from 'react';
import axios from 'axios';

class EditSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            esTitle: this.props.song.title,
            esArtist: this.props.song.artist,
            esAlbum: this.props.song.album,
            esGenre: this.props.song.genre,
            esReleaseYear: this.props.song.release_year,
            esLikeCounter:this.props.song.like_counter,
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) =>{
        let songEdits ={
            "title": this.state.esTitle,
            "artist": this.state.esArtist,
            "album": this.state.esAlbum,
            "genre": this.state.esGenre,
            "release_year": this.state.esReleaseYear,
            "like_counter":this.state.esLikeCounter
        }
        event.preventDefault();
        this.editSong(songEdits);
    }

    async editSong(song){
        await axios.put(`http://127.0.0.1:8000/music/${this.props.song.id}/`, song)
        this.forceUpdate()
        window.location = './SingleSong'
    }

    render() { 
        return ( 
            <div>
                <h1> {this.props.song.title} </h1>
                <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label className="form-text">Title:</label></td> 
                            <td><input className="form-input" name="esTitle" onChange={this.handleChange} defaultValue={this.props.song.title}  /></td>
                        </tr>
                        <tr>
                            <td><label className="form-text">Artist:</label></td> 
                            <td><input className="form-input" name="esArtist" onChange={this.handleChange} defaultValue={this.props.song.artist}  /></td>
                        </tr>
                        <tr>
                            <td><label className="form-text">Album:</label></td> 
                            <td><input className="form-input" name="esAlbum" onChange={this.handleChange} defaultValue={this.props.song.album}  /></td>
                        </tr>
                        <tr>
                            <td><label className="form-text">Genres:</label></td> 
                            <td><input className="form-input" name="esGenre" onChange={this.handleChange} defaultValue={this.props.song.genre}  /></td>
                        </tr>
                        <tr>
                            <td><label className="form-text">Release Year:</label></td> 
                            <td><input className="form-input" name="esReleaseYear" onChange={this.handleChange} defaultValue={this.props.song.release_year}  /></td>
                        </tr>
                    </tbody>
                    <button className="mbtn">Save</button>
                </table>
                </form>
            </div>
         );
    }
}
 
export default EditSong;