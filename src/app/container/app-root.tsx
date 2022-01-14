import 'animate.css';

import '@scss/index.scss';
import AppTheme from '@core/theme/index';
import AppRoute from './app-route';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  return (
    <AppTheme>
      <AppRoute />
    </AppTheme>
  );
};

export default AppRoot;
