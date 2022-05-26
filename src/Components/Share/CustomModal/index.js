import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { ProjectsModal } from '../../ProjectsModal';
import { MODAL_SHOW } from '../../../Redux/utils/constants';

export const CustomModal = ({ modalTitle }) => {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state);
  return (
    <Modal
      show={modalShow}
      size="lg"
      centered
      data-testid="test-id-modal-container"
    >
      <Modal.Header>
        <Modal.Title className="text-center w-100">
          <h1>{modalTitle}</h1>
        </Modal.Title>
        <Button
          className="bg-danger"
          onClick={() => dispatch({ type: MODAL_SHOW, payload: false })}
        >
          x
        </Button>
      </Modal.Header>
      <Modal.Body>
        <ProjectsModal />
      </Modal.Body>
    </Modal>
  );
};

CustomModal.propTypes = {
  modalTitle: PropTypes.string,
};
