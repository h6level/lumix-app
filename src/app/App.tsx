import { MemoryRouter, Routes, Route } from 'react-router-dom';

import CoinPng from '@static/icon/coin.png';
import RocketPng from '@static/image/rocket.png';
import IconSvg from '@static/icon/icon.svg';
import './App.scss';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={IconSvg} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <p><img src={CoinPng} alt="coin" style={{ width: '100px' }} /></p>
      <p><img src={RocketPng} alt="rocket" style={{ width: '100px' }} /></p>
    </div>
  );
};

const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="*" element={<Hello />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
