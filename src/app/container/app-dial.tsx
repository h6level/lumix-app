import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import { styled } from '@mui/system';
import {
  MdHome, MdRefresh, MdLock, MdShare, MdArrowUpward, MdAdd,
} from 'react-icons/md';

import moDial from './store/app-dial';

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

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DSpeedDial ariaLabel="AppDial" icon={<MdAdd />}
      className="app-dial">
      {actions.map(action => (
        <SpeedDialAction key={action.name} icon={action.icon}
          tooltipTitle={action.name} />
      ))}
    </DSpeedDial>
  );
};

export default observer(AppDial);
