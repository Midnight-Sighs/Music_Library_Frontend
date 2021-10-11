//Placeholder file for keeping notes/functions that I need for later.

//testing gitignore

//
//Display Songs
// import React, { Component } from 'react';
// import DeleteSong from '../DeleteSong/DeleteSong';
// import LikeSong from '../LikeSong/LikeSong';
// import './DisplaySongs.css';
// import SingleSong from '../SingleSong/SingleSong'
// import EditSong from '../EditSong/EditSong'

// const DisplaySongs = (props) => {
   
//     function sendResetToApp(list){
//         props.resetSongs(list)
//     }

//     const modalTrigger = () => {
//       props.showModal()
//       }

//     return (
//         <div class='container' id='music-table'>
//         <h1>Song Library</h1>
//               <table>
//                   {props.songs.map(function(song){
//                       return (
//                       <tbody>
//                         <tr>
//                           <td class="mbox"><p>{song.title}</p></td>
//                           <td class="mbox-utility"><DeleteSong song={song.id} removeSong={props} resetSongs={sendResetToApp} songs={props.songs}/></td>
//                           <td class="mbox-utility"><LikeSong song={song.id} songs={props.songs} resetSongs={sendResetToApp} /></td>
//                           <td class="mbox-utility"><button onClick = {modalTrigger}><EditSong song={song.id} modalState={props.modalState} hideModal={props.hideModal} /></button></td>
//                         </tr>
//                         <tr>
//                           <td class="mdetails" colspan="3"><SingleSong song={song} songs={props.songs} resetSongs={sendResetToApp} /></td>
//                         </tr>
//                       </tbody>
//                       )
//                   })}
//               </table>
//               <hr />
//           </div>
//       )
// }

// export default DisplaySongs;

//App
// import React, {Component} from 'react';
// import './App.css';
// import axios from 'axios';
// import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
// import NewSong from './Components/NewSong/NewSong';
// import SearchForm from './Components/SearchForm/SearchForm';
// import ResetAllSongs from './Components/DisplaySongs/ResetAllSongs';
// import Header from './Components/Header/Header';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       songs: [],
//       songsCopy: [],
//       modalDisplay: false
//     }
//   }

//   componentDidMount() {
//     this.getAllSongs();
//   }

//   async getAllSongs(){
//     let response = await axios.get('http://127.0.0.1:8000/music/');
//     this.setState({
//       songs: response.data,
//       songsCopy: response.data,
//     });
//   }

//   removeSong = (deletedSong) =>{
//     let tempSongs = this.state.songs
//     tempSongs.splice(deletedSong)
//     this.setState({
//       songs : tempSongs
//     })
//   }

//   addNewSong = (newSong) => {
//     let tempSongs = this.state.songs
//     tempSongs.push(newSong)
//     this.setState({
//         songs: tempSongs
//     });
//   }

//   resetSongs = (list) => {
//     this.setState({ 
//       songs : list
//      })
//   }

//   showModal = () => {
//     this.setState({
//       modalDisplay : true
//     })
//   }

//   closeModal = () => {
//     this.setState ({
//       modalDisplay: false
//     })
//   }

//   render() { 
//     return(
//       <div class='background'>
//         <div class="container-fluid">
//           <Header />
//           <div class='row'>
//             <div class = "col-lg-8 col-md-10 col-sm-12">
//               <DisplaySongs modalState={this.state.modalDisplay} showModal={this.showModal} 
//                   hideModal={this.closeModal} songs={this.state.songs} 
//                   removeSong={this.removeSong} resetSongs={this.resetSongs}/>
//             </div>
//             <div class= "col-lg-4 col-md-2 col-sm-row mt-5">
//               <SearchForm songs={this.state.songs} resetSongs={this.resetSongs} />
//               <NewSong addNewSong={this.addNewSong} />
//               <ResetAllSongs songs={this.state.songsCopy} resetSongs={this.resetSongs} />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
 
// export default App;
