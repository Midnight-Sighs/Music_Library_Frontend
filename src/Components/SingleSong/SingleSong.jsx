import React, { Component } from 'react';
import './SingleSong.css'


class SingleSong extends Component {
    constructor(props) {
    super(props);
        this.state = { 
            isActive:false
        }
    }

    handleShow = ()=>{
        this.setState({
            isActive: true
        })
    }
  
    handleHide = () =>{
        this.setState({
            isActive: false
        })
    }

    render() { 
        return ( 
            <div>
                <button class="h-s-button"onClick={this.handleShow}>Details</button>
                {this.state.isActive && 
                    <div>
                        <p>Song Title:    {this.props.song.title}</p>
                        <p>Artist:    {this.props.song.artist}</p>
                        <p>Album:    {this.props.song.album}</p>
                        <p>Genres:    {this.props.song.genre}</p>
                        <p>Release Year:    {this.props.song.release_year}</p>
                        <button class="h-s-button" onClick={this.handleHide}>Hide</button>
                    </div>
                }
           </div>
         );
    }
}
 
export default SingleSong;