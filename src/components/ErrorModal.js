import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ErrorModal.css';

const ErrorModal = (props) => {
  const [show, setShow] = useState(props.show);
  useEffect(() => { setShow(props.show) }, [props.show]);

  const handleClose = () => setShow(false);
  const googleSignin = () => {
    props.googleSignin();
    handleClose();
  }

  return (
    <Modal className="modal" show={show[0]} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingresa con google.</Modal.Title>
      </Modal.Header>
      <Modal.Body>{show[1]} posee un registro con google.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
          </Button>
        <Button variant="primary" onClick={googleSignin}>
          Ingresa con google.
          </Button>
      </Modal.Footer>
    </Modal>
  )
};

export default ErrorModal;
