import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { styled } from '@mui/system';

import { blackOpacity } from '@tool/opacity';
import { FlexPaper } from '@styled/index';

interface IProps {
  children: ReactNode;
}
interface IState {}

const DPaper = styled(FlexPaper)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 100,
  backgroundColor: blackOpacity(0.9),
}));

const AppPortal = (props: IProps, state: IState) => {
  const { children } = props;

  return createPortal(
    <DPaper>{children}</DPaper>,
    document.getElementById('lock') as HTMLElement,
  );
};

export default AppPortal;
