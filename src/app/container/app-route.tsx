import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import Setting from '@page/setting/index';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index={true} element={<Home />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRoute;
