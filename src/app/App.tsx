import { MemoryRouter, Routes, Route } from 'react-router-dom';

import '@fontsource/open-sans';
import '@fontsource/open-sans/500.css';
import CoinPng from '@static/icon/coin.png';
import RocketPng from '@static/image/rocket.png';
import IconSvg from '@static/icon/icon.svg';
import './App.scss';

const Hello = () => {
  return (
    <div className="hello-page">
      <img width="200px" alt="icon" src={IconSvg} />
      <h1 style={{ color: '#FA6163' }}>Lumix-app</h1>
      <h1 style={{ color: '#7253ED' }}>Limix-app</h1>
      <h1 style={{ color: '#2196F3' }}>Limix-app</h1>
      <h1 style={{ color: '#673AB7' }}>Limix-app</h1>
      <p>
        <span className="material-icons material-icons-outlined">settings</span>
      </p>
      <p style={{ fontSize: '16px' }}>[webpack-dev-server] App updated. Recompiling...</p>
      <p style={{ fontSize: '17px' }}>[webpack-dev-server] App updated. Recompiling...</p>
      <p style={{ fontSize: '18px' }}>[webpack-dev-server] App updated. Recompiling...</p>
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
