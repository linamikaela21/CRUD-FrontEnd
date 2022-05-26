import React from 'react';
import isEqual from 'lodash.isequal';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Formik } from 'formik';
import { ProjectSchema } from '../../Redux/utils/yupSchemas';
import { ToastCustom } from '../Share/ToastCustom';
import { MODAL_SHOW, POST_PROJECT } from '../../Redux/utils/constants';
import { MyForm } from '../Share/Formik';
import { v4 as uuid } from 'uuid';

export const ProjectsModal = () => {
  const dispatch = useDispatch();
  const { show, projects, project } = useSelector((state) => state);
  const { id, name, description, manager, assigned, status, date } =
    project || {};

  const startValues = {
    id: id ? id : '',
    name: name ? name : '',
    description: description ? description : '',
    manager: manager ? manager : '',
    assigned: assigned ? assigned : '',
    status: status ? status : '',
    date: date ? date : '',
  };

  return (
    <Container>
      <Formik
        data-testid="test-id-formik"
        enableReinitialize
        initialValues={startValues}
        validationSchema={ProjectSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          if (isEqual(values, startValues)) {
            return;
          }
          let newProject;
          if (isEqual(values.id, id)) {
            newProject = {
              ...values,
              id,
            };
          } else {
            newProject = {
              ...values,
              id: uuid(),
            };
          }

          const projectsFiltered = projects.filter(
            (proj) => Object.values(proj)[0] !== id
          );

          dispatch({
            type: POST_PROJECT,
            payload: {
              projects:
                projectsFiltered.length === projects.length
                  ? [...projects, newProject]
                  : [...projectsFiltered, newProject],
            },
          });
          dispatch({ type: MODAL_SHOW, payload: false });
          resetForm();
        }}
        component={MyForm}
      />
      <div data-testid="test-id-save-button-toast">
        {show ? (
          <ToastCustom
            title="Success!"
            text="Your project was updated successfully"
          />
        ) : null}
      </div>
    </Container>
  );
};
