import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Home';

export const RouterWeb = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
