import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Col, Image, Row } from 'react-bootstrap';
import { Header } from '../../Components/Header';
import { Projects } from '../../Components/Projects';

export const Home = () => {
  const { projects } = useSelector((state) => state);
  return (
    <Container fluid data-testid="test-id-home">
      <Header />
      <Col className="d-flex justify-content-center align-items-center">
        {projects.length ? (
          <Projects />
        ) : (
          <Col>
            <Row className="d-flex justify-content-center align-items-center">
              <h1>Lets start creating your first project here</h1>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              <Image
                src={require('../../assets/images/emplyData.jpeg')}
                width={520}
              />
            </Row>
          </Col>
        )}
      </Col>
    </Container>
  );
};
