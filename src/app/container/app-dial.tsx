import React, { useEffect, MouseEvent, SyntheticEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import { styled } from '@mui/system';
import {
  MdHome, MdRefresh, MdLock, MdShare, MdArrowUpward,
  MdKeyboardArrowUp, MdKeyboardArrowDown,
} from 'react-icons/md';

import moDial, { toggleDial } from './store/app-dial';
import { toggleLock } from './store/app-lock';

interface IProps {}
interface IState {}

const actions = [
  { icon: <MdArrowUpward />, name: 'Top' },
  { icon: <MdShare />, name: 'Share' },
  { icon: <MdLock />, name: 'Lock' },
  { icon: <MdRefresh />, name: 'Refresh' },
  { icon: <MdHome />, name: 'Home' },
];

const DSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3.5),
}));

const AppDial = (props: IProps, state: IState) => {
  const navi = useNavigate();
  const { isDial } = moDial;

  useEffect(() => {
    return () => {};
  }, []);

  const onItem = (ev: MouseEvent, name: string) => {
    ev.stopPropagation();
    if (name === 'Lock') toggleLock(true);
    else if (name === 'Refresh') window.location.reload();
    else if (name === 'Home') navi('/');
  };

  const onFire = (ev: MouseEvent) => {
    ev.stopPropagation();
    toggleDial(!isDial);
  };

  return (
    <DSpeedDial open={isDial} ariaLabel="AppDial"
      onClick={(ev: MouseEvent) => onFire(ev)}
      icon={isDial ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      className="app-dial">
      {actions.map(action => (
        <SpeedDialAction key={action.name} icon={action.icon}
          tooltipTitle={action.name}
          onClick={(ev: MouseEvent) => onItem(ev, action.name) } />
      ))}
    </DSpeedDial>
  );
};

export default observer(AppDial);
