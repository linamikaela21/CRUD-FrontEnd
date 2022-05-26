import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export const CustomInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  handleInputChange,
  errors,
  onBlur,
  disabled,
  isRequired,
}) => {
  return (
    <Form.Group className="w-100" data-testid="test-id-form-group-container">
      <Form.Label data-testid="test-id-form-label">
        {label}
        {isRequired && (
          <span
            className="text-danger"
            data-testid="test-id-label-with-asterisk"
          >
            {' *'}
          </span>
        )}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        name={name}
        value={value}
        onBlur={onBlur}
        data-testid="test-id-form-control"
        disabled={disabled}
      />
      {errors && (
        <Form.Text className="text-danger" data-testid="test-id-error-text">
          {errors}
        </Form.Text>
      )}
    </Form.Group>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputChange: PropTypes.func,
  errors: PropTypes.string,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  isRquired: PropTypes.bool,
};
