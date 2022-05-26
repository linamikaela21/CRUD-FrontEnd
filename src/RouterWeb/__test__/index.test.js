import { act, render } from '@testing-library/react';
import { RouterWeb } from '..';
import { Routes } from 'react-router-dom';

const MockRouterWeb = () => {
  <Routes>
    <RouterWeb />
  </Routes>;
};

describe('RouterWeb', () => {
  it('should render RouterWeb', async () => {
    await act(async () => {
      render(<MockRouterWeb />);
    });
  });
});
