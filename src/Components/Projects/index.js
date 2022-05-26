import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Container, Col } from 'react-bootstrap';
import { CardProject } from '../Share/CardProject';
import { GET_PROJECTS } from '../../Redux/utils/constants';

export const Projects = () => {
  const { projects } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_PROJECTS,
      payload: { project: {} },
    });
    console.clear();
  }, [projects]);

  return (
    <Container data-testid="test-id-projects" className="d-block">
      <Row className="d-flex justify-content-center align-items-center">
        <div className="pb-4">
          <h1>My Proyects</h1>
        </div>
      </Row>
      <Col className="d-block">
        {projects.length > 0 &&
          projects?.map((proj) => {
            return (
              proj && (
                <Row
                  key={proj.id}
                  className="d-flex justify-content-center align-items-center"
                >
                  <CardProject
                    id={proj.id}
                    name={proj.name?.toUpperCase()}
                    description={proj.description}
                    manager={proj.manager}
                    assigned={proj.assigned}
                    status={proj.status}
                    date={proj.date}
                  />
                </Row>
              )
            );
          })}
      </Col>
    </Container>
  );
};
