import React, { Component } from 'react';
import './SingleSong.css'
import Modal from '../EditSong/Modal'


class SingleSong extends Component {
    constructor(props) {
    super(props);
        this.state = { 
            isActive:false,
            showModal : false
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

    modalShow = ()=>{
        this.setState({
            showModal: true
        })
    }

    modalHide = ()=>{
        this.setState({
            showModal: false
        })
    }

    render() { 
        return ( 
            <div>
                <button className="h-s-button"onClick={this.handleShow}>Details</button>
                {this.state.isActive && 
                    <div key={this.props.song.id}>
                        <p>Song Title:    {this.props.song.title}</p>
                        <p>Artist:    {this.props.song.artist}</p>
                        <p>Album:    {this.props.song.album}</p>
                        <p>Genres:    {this.props.song.genre}</p>
                        <p>Release Year:    {this.props.song.release_year}</p>
                        <button className="h-s-button" onClick={this.handleHide}>Hide</button>
                        <Modal songId={this.props.song} />
                    </div>
                }
           </div>
           
         );
    }
}
 
export default SingleSong;