import React, {useState} from 'react';
import './EditSong.css'
import { Modal } from 'react-bootstrap';
import EditSong from './EditSong'


const ModalEdit = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <button className="mbtn" onClick={handleShow}>
          Edit
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className="modal-content-edit">
            <Modal.Title><h1>Edit Song</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-content-edit">
            <p><EditSong song={props.songId} /></p>
            
          </Modal.Body>
          <Modal.Footer className="modal-content-edit">
            <button className="mbtn" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  

export default ModalEdit;