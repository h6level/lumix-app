import Font from '@tool/font';
import Style from '@tool/style';

const muiTypography = {
  // htmlFontSize: 20,
  // fontSize: 10,
  fontFamily: Style.fontFamily,
  body1: {
    letterSpacing: 0,
    lineHeight: Style.lineHeight,
    fontSize: Font.size14,
  },
  body2: {
    letterSpacing: 0,
    lineHeight: Style.lineHeight,
    fontSize: Font.size14,
  },
  button: {
    letterSpacing: Style.spacing01,
    lineHeight: Style.lineHeight,
    fontSize: Font.size14,
    fontWeight: Style.weight500,
    textTransform: undefined,
  },
  caption: {
    letterSpacing: 0,
    lineHeight: Style.lineHeight,
    fontSize: Font.size14,
    fontWeight: Style.weight400,
  },
  subtitle1: {
    letterSpacing: 0,
    lineHeight: Style.lineHeight,
    fontSize: Font.size14,
    fontWeight: Style.weight400,
  },
  subtitle2: {
    letterSpacing: 0,
    lineHeight: Style.lineHeight,
    fontSize: Font.size14,
    fontWeight: Style.weight400,
  },
  overline: {
    letterSpacing: Style.spacing01,
    lineHeight: Style.lineHeight,
    fontSize: Font.size14,
    fontWeight: Style.weight400,
    textTransform: undefined,
  },
  h6: {
    letterSpacing: Style.spacing01,
    lineHeight: Style.lineHeight,
    fontSize: Font.size18,
    fontWeight: Style.weight500,
  },
  h5: {
    letterSpacing: Style.spacing01,
    lineHeight: Style.lineHeight,
    fontSize: Font.size20,
    fontWeight: Style.weight500,
  },
  h4: {
    letterSpacing: Style.spacing01,
    lineHeight: Style.lineHeight,
    fontSize: Font.size22,
    fontWeight: Style.weight500,
  },
  h3: {
    letterSpacing: Style.spacing01,
    lineHeight: Style.lineHeight,
    fontSize: Font.size24,
    fontWeight: Style.weight500,
  },
  h2: {
    letterSpacing: Style.spacing01,
    lineHeight: Style.lineHeight,
    fontSize: Font.size28,
    fontWeight: Style.weight500,
  },
  h1: {
    letterSpacing: Style.spacing01,
    lineHeight: Style.lineHeight,
    fontSize: Font.size32,
    fontWeight: Style.weight500,
  },
};

export default muiTypography;
