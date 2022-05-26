import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { CustomInput } from '../CustomInput';
import { CustomSelect } from '../CustomSelect';

export const MyForm = ({
  values,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <Form onSubmit={handleSubmit} data-testid="test-id-formik-container">
      <div className="d-flex justify-content-around mb-2 w-100">
        <CustomInput
          handleInputChange={handleChange}
          label="Project Name"
          type="text"
          placeholder="Project Name"
          name="name"
          value={values.name}
          onBlur={handleBlur}
          errors={errors.name}
          isRequired={true}
        />
      </div>
      <div className="d-flex justify-content-around mb-2 w-100">
        <CustomInput
          handleInputChange={handleChange}
          label="Project Description"
          type="text"
          placeholder="Project Description"
          name="description"
          onBlur={handleBlur}
          value={values.description}
          errors={errors.description}
          isRequired={true}
        />
      </div>
      <div className="d-flex justify-content-around mb-2 w-100">
        <CustomSelect
          name="manager"
          label="Project Manager"
          value={values.manager}
          options={['Lali', 'Maxi', 'Agus']}
          isRequired={true}
          handleSelectChange={handleChange}
          onBlur={handleBlur}
          errors={errors.manager}
        />
      </div>
      <div className="d-flex justify-content-around mb-2 w-100">
        <CustomSelect
          name="assigned"
          label="Assigned to"
          options={['July', 'Kyra', 'Facu']}
          value={values.assigned}
          isRequired={true}
          handleSelectChange={handleChange}
          onBlur={handleBlur}
          errors={errors.assigned}
        />
      </div>
      <div className="d-flex justify-content-around mb-2 w-100">
        <CustomSelect
          name="status"
          label="Project Status"
          value={values.status}
          options={['Done', 'inProcess', 'withoutStatus']}
          isRequired={true}
          handleSelectChange={handleChange}
          onBlur={handleBlur}
          errors={errors.status}
        />
      </div>
      <div className="d-flex justify-content-around mb-2 w-100">
        <CustomInput
          handleInputChange={handleChange}
          label="Project Day"
          type="date"
          name="date"
          onBlur={handleBlur}
          value={values.date}
          errors={errors.date}
        />
      </div>
      <div className="d-flex justify-content-around mb-2 w-100">
        <div style={{ width: '48%' }} className="d-flex justify-content-around">
          <Button
            variant="danger"
            type="submit"
            data-testid="test-id-formik-save"
            disabled={isSubmitting ? true : false}
          >
            Save changes
          </Button>
        </div>
      </div>
    </Form>
  );
};

MyForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleBlur: PropTypes.func,
  isSubmitting: PropTypes.bool,
};
