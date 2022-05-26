import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  Dropdown,
  DropdownButton,
  Alert,
  Button,
  Modal,
} from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { BsPencilFill, BsThreeDotsVertical } from 'react-icons/bs';
import {
  DELETE_PROJECT,
  GET_PROJECT_BY_ID,
  MODAL_SHOW,
} from '../../../Redux/utils/constants';

export const CardProject = ({
  id,
  name,
  description,
  manager,
  assigned,
  status,
  date,
}) => {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state);
  const [showAlert, setShowAlert] = useState(false);

  const getProject = (id) => {
    dispatch({
      type: GET_PROJECT_BY_ID,
      payload: id,
    });
  };

  const deleteProject = async () => {
    dispatch({
      type: DELETE_PROJECT,
      payload: { projId: project.id, show: true },
    });
    setShowAlert(false);
  };

  const openAlert = (id) => {
    getProject(id);
    setShowAlert(true);
  };

  const CostumAlert = () => (
    <Modal
      show={showAlert}
      onHide={() => setShowAlert(false)}
      styles={{ background: 'none' }}
    >
      <Alert show={showAlert} variant="danger" className="m-2">
        <Alert.Heading>Are you sure do you want delete it ?</Alert.Heading>
        <div className="d-flex justify-content-between">
          <Button
            onClick={() => setShowAlert(false)}
            variant="outline-secondary"
          >
            No
          </Button>
          <Button onClick={() => deleteProject()} variant="outline-danger">
            Yes <AiFillDelete size={25} />
          </Button>
        </div>
      </Alert>
    </Modal>
  );

  const updateProject = (id) => {
    getProject(id);
    setTimeout(() => {
      dispatch({ type: MODAL_SHOW, payload: true });
    }, 300);
  };

  return (
    <>
      <Card
        data-testid="test-id-card-prod"
        className="d-flex justify-content-center align-items-center w-75 bg-grey"
      >
        <Card.Header
          className={`${
            status === 'Done'
              ? 'bg-success'
              : status === 'inProcess'
              ? 'bg-primary'
              : 'bg-secondary'
          } d-flex justify-content-between text-capitalize w-100`}
        >
          <h2 className="fw-bold text-center text-white">
            assigned: {assigned?.toUpperCase()}
          </h2>
          <h3 className="fw-bold text-center text-white">({status})</h3>
          <DropdownButton
            title={<BsThreeDotsVertical size={25} />}
            variant={
              status === 'Done'
                ? 'bg-success'
                : status === 'inProcess'
                ? 'bg-primary'
                : 'bg-secondary'
            }
          >
            <Dropdown.Item
              className="text-white bg-danger text-capitalize text-center"
              onClick={() => openAlert(id)}
            >
              Delete <AiFillDelete size={25} />
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              className="text-white bg-warning text-capitalize text-center"
              onClick={() => updateProject(id)}
            >
              Edit <BsPencilFill size={25} />
            </Dropdown.Item>
          </DropdownButton>
        </Card.Header>
        <Card.Body className="d-block justify-content-center align-items-center">
          <Card.Title className="d-flex justify-content-around text-capitalize">
            <h4>{name}</h4>
          </Card.Title>
          <Card.Text className="d-block justify-content-center align-items-center">
            <h5>Manager: {manager}</h5>
            <h6>{description}</h6>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center w-100">
          <p>{date}</p>
        </Card.Footer>
      </Card>
      {showAlert && <CostumAlert />}
    </>
  );
};

CardProject.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  manager: PropTypes.string,
  assigned: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
};
