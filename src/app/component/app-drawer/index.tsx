import React, { useEffect, MouseEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Drawer, Button } from '@mui/material';
import { styled } from '@mui/system';

import { FlexColumnBox } from '@styled/index';
import moDrawer, { toggleDrawer } from './store';

interface IProps {}
interface IState {}

const DBox = styled(FlexColumnBox)(() => ({}));

const AppDrawer = (props: IProps, state: IState) => {
  const navi = useNavigate();
  const { isDrawer } = moDrawer;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Drawer anchor="left" open={isDrawer} variant="persistent"
      onClose={() => toggleDrawer(false)}>
      <DBox>
        <Button variant="contained" color="info">Monday</Button>
        <Button variant="contained" color="warning">Tuesday</Button>
      </DBox>
    </Drawer>
  );
};

export default observer(AppDrawer);
