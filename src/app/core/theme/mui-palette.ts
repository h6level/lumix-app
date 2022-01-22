import { PaletteMode } from '@mui/material';

import {
  pink, purple, green, red, blue, deepOrange, grey,
} from '@mui/material/colors';

const muiPalette = {
  mode: <PaletteMode>'light',
  common: {
    black: grey[900],
    white: grey.A100,
  },
  primary: {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700,
    contrastText: grey.A100,
  },
  secondary: {
    light: purple.A200,
    main: purple.A400,
    dark: purple.A700,
    contrastText: grey.A100,
  },
  success: {
    light: green.A200,
    main: green[600],
    dark: green[900],
    contrastText: grey.A100,
  },
  error: {
    light: red.A400,
    main: red.A700,
    dark: red[900],
    contrastText: grey.A100,
  },
  info: {
    light: blue.A200,
    main: blue.A400,
    dark: blue.A700,
    contrastText: grey.A100,
  },
  warning: {
    light: deepOrange.A200,
    main: deepOrange.A400,
    dark: deepOrange.A700,
    contrastText: grey.A100,
  },
  text: {
    primary: grey[900],
    secondary: grey.A100,
    disabled: grey.A400,
  },
};

export default muiPalette;
