import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '@comp/dashboard/index';
import Home from '@comp/home/index';
import Setting from '@comp/setting/index';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="setting" element={<Setting />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRoute;
