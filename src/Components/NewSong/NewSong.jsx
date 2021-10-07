import React from 'react';

class NewSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'title', 
            artist: 'artist', 
            album: 'album', 
            genre: 'genre', 
            release_date: 'release_date',
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
            "release_date": this.state.release_date,
            "like_counter": this.state.like_counter
        }
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/music/new', newSong)
    }

    render() { 
        return ( 
        <div>
            <h1>Create a New Song</h1>
            <form onSubmit={this.handleSubmit}>
                <label for="title">Song Title:</label> <input name="title" onChange={this.handleChange} value={this.state.title} />
                <label for="artist">Artist:</label> <input name="artist" onChange={this.handleChange} value={this.state.artist} />
                <label for="album">Song Album:</label><input name="album" onChange={this.handleChange} value={this.state.album} />
                <label for="genre">Genre(s):</label><input name="genre" onChange={this.handleChange} value={this.state.genre} />
                <label for="release_date">Release Date (YYYY-MM-DD HH-MM):</label><input name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                <p><button type="submit">Add New Song</button></p>
                <hr />
            </form>
        </div> );
    }
}
 
export default NewSong;