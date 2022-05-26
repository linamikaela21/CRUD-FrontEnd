import { render, screen } from '@testing-library/react';
import { CustomSelect } from '..';

const MockValues = {
  fake: '',
};
const MockErrors = {
  fake: '',
};
const handleSelectChange = jest.fn();
const MockOnBlur = jest.fn();

describe('CustomSelect', () => {
  beforeEach(() => {
    render(
      <CustomSelect
        label="Fake text"
        type="text"
        name="fake"
        value={MockValues.fake}
        placeholder="Fake text"
        handleInputChange={handleSelectChange}
        errors={MockErrors.fake}
        onBlur={MockOnBlur}
        disabled={false}
        isRequired={false}
      />
    );
  });

  it('should render a FormGroup container', () => {
    const formGroup = screen.getByTestId('test-id-select-group-container');
    expect(formGroup).toBeInTheDocument();
  });

  it('should render a Label', () => {
    const label = screen.getByTestId('test-id-select-label');
    expect(label).toBeInTheDocument();
  });

  it('should render a Label without asterisk', () => {
    const label = screen.queryAllByTestId('test-id-select-label-with-asterisk');
    expect(label.length).toBe(0);
  });

  it('should render a Label with asterisk', () => {
    render(
      <CustomSelect
        label="Fake text"
        type="text"
        name="fake"
        value={MockValues.fake}
        placeholder="Fake text"
        handleInputChange={handleSelectChange}
        errors={MockErrors.fake}
        onBlur={MockOnBlur}
        disabled={false}
        isRequired={true}
      />
    );
    const label = screen.getByTestId('test-id-select-label-with-asterisk');
    expect(label).toBeInTheDocument();
  });
});
