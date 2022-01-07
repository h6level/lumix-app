import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import '@scss/index.scss';
import '@fontsource/open-sans';
import '@fontsource/open-sans/500.css';
import './App.scss';
import AppPortal from '@con/app-portal';
import AppCover from '@con/app-cover';
import AppLoading from '@con/app-loading';
import AppLock from '@con/app-lock';
import AppModal from '@con/app-modal';
import AppTheme from '@core/theme/index';

const Hello = () => {
  return (
    <div className="hello-page">
      <section>
        <span className="material-icons material-icons-outlined">settings</span>
        <p><Button variant="contained" color="primary">Primary</Button></p>
        <p><Button variant="contained" color="secondary">Secondary</Button></p>
        <p><Button variant="contained" color="success">Success</Button></p>
        <p><Button variant="contained" color="warning">Warning</Button></p>
        <p><Button variant="contained" color="info">Info</Button></p>
        <p><Button variant="contained" color="error">Error</Button></p>
        <p><Button variant="contained">Default</Button></p>

        <p><Button variant="outlined" color="primary">Primary</Button></p>
        <p><Button variant="outlined" color="secondary">Secondary</Button></p>
        <p><Button variant="outlined" color="success">Success</Button></p>
        <p><Button variant="outlined" color="warning">Warning</Button></p>
        <p><Button variant="outlined" color="info">Info</Button></p>
        <p><Button variant="outlined" color="error">Error</Button></p>
        <p><Button variant="outlined">Default</Button></p>
      </section>
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
    <AppTheme>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="*" element={<Hello />} />
        </Routes>
      </MemoryRouter>
    </AppTheme>
  );
};

export default App;
