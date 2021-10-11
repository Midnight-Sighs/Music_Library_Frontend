import React, { Component } from 'react';
import './EditSong.css'

const Modal = (props) =>{
    if (!props.show) {
        return null
    }
    
    return(
        <div class="modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Hellow</h4>
                </div>
                <div class="modal-body">
                    content (form here)
                </div>
                <div class="modal-footer">
                    <button class="mbtn" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;