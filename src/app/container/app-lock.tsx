import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Button, Stack } from '@mui/material';
import { styled } from '@mui/system';

import './scss/app-lock.scss';
import { toggleLock } from './store/app-lock';

interface IProps {}
interface IState {}

const LockStack = styled(Stack)(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const AppPortal = (props: IProps, state: IState) => {
  return createPortal(
    <section className="app-lock">
      <LockStack>
        <Button variant="contained" color="warning"
          onClick={() => toggleLock(false)}>unLock
        </Button>
      </LockStack>
    </section>,
    document.getElementById('lock') as HTMLElement,
  );
};

export default AppPortal;
