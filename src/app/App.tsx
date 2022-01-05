/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import icon from '../../assets/icon.svg';
import './App.scss';

const Hello = () => {
  return (
    <div className="hello-page">
      <p><img width="200px" alt="icon" src={icon} /></p>
      <h1>electron-react-boilerplate</h1>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="*" element={<Hello />} />
      </Routes>
    </Router>
  );
};

export default App;
