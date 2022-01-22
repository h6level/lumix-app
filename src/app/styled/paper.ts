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

const FlexPaper = styled(APaper)(() => ({ display: 'flex' }));
const FlexColumnPaper = styled(FlexPaper)(() => ({ flexDirection: 'column' }));
const FlexCenterPaper = styled(FlexPaper)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
}));
const GridPaper = styled(APaper)(() => ({ display: 'grid' }));

const FlexBox = styled(ABox)(() => ({ display: 'flex' }));
const FlexColumnBox = styled(FlexBox)(() => ({ flexDirection: 'column' }));
const FlexCenterBox = styled(FlexBox)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
}));
const GridBox = styled(ABox)(() => ({ display: 'grid' }));

const InlineFlexPaper = styled(APaper)(() => ({ display: 'flex' }));
const InlineFlexColumnPaper = styled(InlineFlexPaper)(() => ({ flexDirection: 'column' }));
const InlineFlexCenterPaper = styled(InlineFlexPaper)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
}));
const InlineGridPaper = styled(APaper)({ display: 'inline-grid' });

const InlineFlexBox = styled(ABox)(() => { display: 'inline-flex' });
const InlineFlexColumnBox = styled(InlineFlexBox)(() => { flexDirection: 'column' });
const InlineFlexCenterBox = styled(InlineFlexBox)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
}));
const InlineGridBox = styled(ABox)(() => ({ display: 'inline-grid' }));

export {
  APaper, ABox,
  FlexPaper, FlexColumnPaper, FlexCenterPaper, GridPaper,
  FlexBox, FlexColumnBox, FlexCenterBox, GridBox,
  InlineFlexPaper, InlineFlexColumnPaper, InlineFlexCenterPaper, InlineGridPaper,
  InlineFlexBox, InlineFlexColumnBox, InlineFlexCenterBox, InlineGridBox,
};
