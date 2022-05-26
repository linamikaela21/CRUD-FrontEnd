import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export const CustomSelect = ({
  name,
  label,
  value,
  options,
  isRequired,
  handleSelectChange,
  onBlur,
  errors,
}) => {
  return (
    <Form.Group className="w-100" data-testid="test-id-select-group-container">
      <Form.Label data-testid="test-id-select-label">
        {label}
        {isRequired && (
          <span
            className="text-danger"
            data-testid="test-id-select-label-with-asterisk"
          >
            {' *'}
          </span>
        )}
      </Form.Label>
      <Form.Control
        as="select"
        name={name}
        onChange={handleSelectChange}
        value={value}
        onBlur={onBlur}
        data-testid="test-id-form-control"
      >
        <option value="">{label}</option>
        {options?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Form.Control>

      {errors && (
        <Form.Text className="text-danger" data-testid="test-id-error-text">
          {errors}
        </Form.Text>
      )}
    </Form.Group>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  isRequired: PropTypes.bool,
  errors: PropTypes.object,
  handleSelectChange: PropTypes.func,
  handleBlur: PropTypes.func,
};
