import React from 'react';
import { CustomModal } from '../Share/CustomModal';
import { useDispatch } from 'react-redux';
import { Navbar, Container, Button, Image } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { MODAL_SHOW } from '../../Redux/utils/constants';

export const Header = () => {
  const dispatch = useDispatch();
  const addProjectButton = () => {
    dispatch({
      type: MODAL_SHOW,
      payload: true,
    });
  };
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mb-5"
      data-testid="test-id-header"
    >
      <Container fluid className="d-flex justify-content-evenly p-2 mr-5">
        <Navbar.Brand href="/" className="fw-bolder fs-3">
          <Image src={require('../../assets/images/logo.png')} width={100} />
        </Navbar.Brand>
        <Button variant="danger" onClick={() => addProjectButton()}>
          <BsPlusLg size={20} className="m-2 mb-2" />
          Add Project
        </Button>
        <CustomModal modalTitle="Your Project" />
      </Container>
    </Navbar>
  );
};
