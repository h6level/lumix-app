import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import muiPalette from './mui-palette';
import muiTypography from './mui-typography';
import muiComponents from './mui-components';

interface IProps {
  children: ReactNode,
}
interface IState {}

const theme = createTheme({
  palette: muiPalette,
  shape: {
    borderRadius: 0,
  },
  typography: muiTypography,
  components: muiComponents,
});

const AppTheme = (props: IProps, state: IState) => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default AppTheme;
