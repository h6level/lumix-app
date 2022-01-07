import { grey } from '@mui/material/colors';
import muiButton from './mui-button';

const muiComponents = {
  MuiButton: muiButton,
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
        backgroundColor: grey[50],
      },
    },
  },
};

export default muiComponents;
