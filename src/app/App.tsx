import { MemoryRouter, Routes, Route } from 'react-router-dom';

import '@scss/index.scss';
import '@fontsource/open-sans';
import '@fontsource/open-sans/500.css';
import './App.scss';
import AppPortal from '@con/app-portal';
import AppCover from '@con/app-cover';
import AppLoading from '@con/app-loading';
import AppLock from '@con/app-lock';
import AppModal from '@con/app-modal';

const Hello = () => {
  return (
    <div className="hello-page">
      <p>
        <span className="material-icons material-icons-outlined">settings</span>
      </p>
      <AppPortal><p>Portal...</p></AppPortal>
      <AppCover><p>Cover...</p></AppCover>
      <AppLoading><p>Loading...</p></AppLoading>
      <AppLock><p>Lock...</p></AppLock>
      <AppModal><p>Modal...</p></AppModal>
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
