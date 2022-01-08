import { Paper } from '@mui/material';
import { styled } from '@mui/system';

const APaper = styled(Paper)(() => ({
  position: 'relative',
  width: '100%',
  margin: 0,
  padding: 0,
}));

const FlexPaper = styled(APaper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const GridPaper = styled(APaper)(() => ({
  display: 'grid',
}));

export { FlexPaper, GridPaper, APaper };
