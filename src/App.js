import React from 'react';
import { RouterWeb } from './RouterWeb';

export const App = () => {
  return (
    <div data-testid="test-id-app" styles={{ width: '100vw', height: '100vh' }}>
      <RouterWeb />
    </div>
  );
};
