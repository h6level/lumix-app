import muiButton from './mui-button';
import Style from '@tool/style';

const muiComponents = {
  MuiButton: muiButton,
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        backgroundColor: Style.transparent,
      },
    },
  },
};

export default muiComponents;
