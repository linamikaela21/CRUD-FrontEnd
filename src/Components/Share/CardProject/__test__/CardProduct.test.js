import { CardProject } from '..';
import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const { Provider } = redux;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

const MockedCardProject = () => {
  return (
    <Provider store={store}>
      <CardProject
        id="123"
        name="Lali"
        description="fake description"
        manager="fake manager"
        assigned="fake assigned"
        status="fake status"
        date="fake date"
      />
    </Provider>
  );
};

describe('CardProject', () => {
  beforeEach(() => {
    render(<MockedCardProject />);
  });

  it('should render a CardProject', () => {
    const element = screen.getByTestId('test-id-card-prod');
    expect(element).toBeInTheDocument();
  });
});
