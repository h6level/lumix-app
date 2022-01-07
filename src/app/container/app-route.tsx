import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Home from '@comp/home/index';
import Setting from '@comp/setting/index';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="setting" element={<Setting />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRoute;
