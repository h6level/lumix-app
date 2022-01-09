import { Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const APaper = styled(Paper)(() => ({
  position: 'relative',
  width: '100%',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
}));

const ABox = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
}));

const FlexPaper = styled(APaper)(() => ({
  display: 'flex',
}));

const FlexColumnPaper = styled(FlexPaper)(() => ({
  flexDirection: 'column',
}));

const GridPaper = styled(APaper)(() => ({
  display: 'grid',
}));

const FlexBox = styled(ABox)(() => ({
  display: 'flex',
}));

const FlexColumnBox = styled(FlexBox)(() => ({
  flexDirection: 'column',
}));

const GridBox = styled(ABox)(() => ({
  display: 'grid',
}));

export {
  APaper, FlexPaper, GridPaper, FlexColumnPaper,
  ABox, FlexBox, GridBox, FlexColumnBox,
};
