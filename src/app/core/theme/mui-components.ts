import muiButton from './mui-button';

const muiComponents = {
  MuiButton: muiButton,
  MuiPaper: {
    styleOverrides: {
      root: { boxShadow: 'none' },
    },
  },
};

export default muiComponents;
