import { Components } from '@mui/material';

import { Grey, Pink, Blue } from '@tool/color/index';
import Style from '@tool/style';
import muiButton from './mui-button';

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
  MuiSpeedDial: {
    styleOverrides: {
      fab: {
        width: '4.6rem',
        height: '4.6rem',
        minHeight: '3.6rem',
        color: Grey.grey50,

        '& svg': {
          width: '2.4rem',
          height: '2.4rem',
        },
      },
      actions: {
        marginBottom: '0 !important',
        paddingBottom: '1rem !important',
      },
    },
  },
  MuiSpeedDialAction: {
    styleOverrides: {
      fab: {
        width: '4rem',
        height: '4rem',
        minHeight: '3.2rem',
        margin: '0.5rem',
        color: Pink.pinkA400,

        '& svg': {
          width: '1.8rem',
          height: '1.8rem',
        },
        '&:hover': {
          backgroundColor: Pink.pink100,
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      popper: {
        '.MuiTooltip-tooltip': {
          marginRight: '1rem !important',
        },
      },
      tooltip: {
        margin: 0,
        padding: '0.4rem 0.8rem',
        fontSize: '1.2rem',
        borderRadius: '0.4rem',
        color: Grey.grey50,
        backgroundColor: Grey.grey700,
      },
    },
  },
};

export default muiComponents;
