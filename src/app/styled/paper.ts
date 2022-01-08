import { Paper } from '@mui/material';
import { styled } from '@mui/system';

const APaper = styled(Paper)(() => ({
  position: 'relative',
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

export default APaper;
