import {
  blue, green, deepOrange, red, purple, pink, grey,
} from '@mui/material/colors';

const muiButton = {
  styleOverrides: {
    outlinedPrimary: {
      '&:hover': { backgroundColor: pink[100] },
    },
    outlinedSecondary: {
      '&:hover': { backgroundColor: purple[100] },
    },
    outlinedError: {
      '&:hover': { backgroundColor: red[100] },
    },
    outlinedWarning: {
      '&:hover': { backgroundColor: deepOrange[100] },
    },
    outlinedInfo: {
      '&:hover': { backgroundColor: blue[100] },
    },
    outlinedSuccess: {
      '&:hover': { backgroundColor: green[100] },
    },
    textPrimary: {
      backgroundColor: pink[100],
      '&:hover': { backgroundColor: pink[100] },
    },
    textSecondary: {
      backgroundColor: purple[100],
      '&:hover': { backgroundColor: purple[100] },
    },
    textError: {
      backgroundColor: red[100],
      '&:hover': { backgroundColor: red[100] },
    },
    textWarning: {
      backgroundColor: deepOrange[100],
      '&:hover': { backgroundColor: deepOrange[100] },
    },
    textInfo: {
      backgroundColor: blue[100],
      '&:hover': { backgroundColor: blue[100] },
    },
    textSuccess: {
      backgroundColor: green[100],
      '&:hover': { backgroundColor: green[100] },
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
      '&.Mui-disabled': { backgroundColor: grey[500] },
    },
  },
};

export default muiButton;
