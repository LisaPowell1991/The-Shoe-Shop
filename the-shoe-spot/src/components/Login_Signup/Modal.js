import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../index.css';

const CustomModal = ({ show, handleClose, title, children }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className="custom-modal-header" closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;