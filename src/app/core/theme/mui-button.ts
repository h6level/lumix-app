import {
  blue, green, deepOrange, red, purple, pink, grey,
} from '@mui/material/colors';
import {
  primaryOpacity, secondaryOpacity, successOpacity,
  infoOpacity, warningOpacity, errorOpacity,
  blackOpacity, whiteOpacity,
} from '@tool/opacity';

const muiButton = {
  styleOverrides: {
    outlinedPrimary: {
      '&:hover': { backgroundColor: primaryOpacity(0.2) },
    },
    outlinedSecondary: {
      '&:hover': { backgroundColor: secondaryOpacity(0.2) },
    },
    outlinedError: {
      '&:hover': { backgroundColor: errorOpacity(0.2) },
    },
    outlinedWarning: {
      '&:hover': { backgroundColor: warningOpacity(0.2) },
    },
    outlinedInfo: {
      '&:hover': { backgroundColor: infoOpacity(0.2) },
    },
    outlinedSuccess: {
      '&:hover': { backgroundColor: successOpacity(0.2) },
    },
    dashedPrimary: {
      '&:hover': { backgroundColor: primaryOpacity(0.2) },
    },
    dashedSecondary: {
      '&:hover': { backgroundColor: secondaryOpacity(0.2) },
    },
    dashedSuccess: {
      '&:hover': { backgroundColor: successOpacity(0.2) },
    },
    dashedInfo: {
      '&:hover': { backgroundColor: infoOpacity(0.2) },
    },
    dashedWarning: {
      '&:hover': { backgroundColor: warningOpacity(0.2) },
    },
    dashedError: {
      '&:hover': { backgroundColor: errorOpacity(0.2) },
    },
    textPrimary: {
      backgroundColor: primaryOpacity(0.1),
      '&:hover': { backgroundColor: primaryOpacity(0.2) },
    },
    textSecondary: {
      backgroundColor: secondaryOpacity(0.1),
      '&:hover': { backgroundColor: secondaryOpacity(0.2) },
    },
    textError: {
      backgroundColor: errorOpacity(0.1),
      '&:hover': { backgroundColor: errorOpacity(0.2) },
    },
    textWarning: {
      backgroundColor: warningOpacity(0.1),
      '&:hover': { backgroundColor: warningOpacity(0.2) },
    },
    textInfo: {
      backgroundColor: infoOpacity(0.1),
      '&:hover': { backgroundColor: infoOpacity(0.2) },
    },
    textSuccess: {
      backgroundColor: successOpacity(0.1),
      '&:hover': { backgroundColor: successOpacity(0.2) },
    },
    containedPrimary: {
      '&:hover': { backgroundColor: pink.A700 },
    },
    containedSecondary: {
      '&:hover': { backgroundColor: purple.A700 },
    },
    containedInfo: {
      '&:hover': { backgroundColor: blue[800] },
    },
    containedSuccess: {
      '&:hover': { backgroundColor: green[800] },
    },
    containedWarning: {
      '&:hover': { backgroundColor: deepOrange[900] },
    },
    containedError: {
      '&:hover': { backgroundColor: red[900] },
    },
    root: {
      '&.Mui-disabled': {
        color: grey[800],
        backgroundColor: grey[500],
      },
    },
  },
  variants: [
    {
      props: { variant: 'dashed' },
      style: {
        border: `1px dashed ${pink.A400}`,
      },
    },
    {
      props: { variant: 'dashed', color: 'primary' },
      style: {
        border: `1px dashed ${pink.A400}`,
      },
    },
    {
      props: { variant: 'dashed', color: 'secondary' },
      style: {
        border: `1px dashed ${purple.A400}`,
      },
    },
    {
      props: { variant: 'dashed', color: 'success' },
      style: {
        border: `1px dashed ${green[600]}`,
      },
    },
    {
      props: { variant: 'dashed', color: 'error' },
      style: {
        border: `1px dashed ${red.A700}`,
      },
    },
    {
      props: { variant: 'dashed', color: 'info' },
      style: {
        border: `1px dashed ${blue.A400}`,
      },
    },
    {
      props: { variant: 'dashed', color: 'warning' },
      style: {
        border: `1px dashed ${deepOrange.A400}`,
      },
    },
  ],
};

export default muiButton;
