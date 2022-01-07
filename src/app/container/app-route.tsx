import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Home from '@comp/home/index';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );
};

export default AppRoute;
