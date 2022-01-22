import { Components } from '@mui/material';

import muiButton from './mui-button';
import Style from '@tool/style';

const muiComponents: Components = {
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
