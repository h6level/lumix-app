import { useEffect, useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

import './scss/index.scss';
import { Grey } from '@tool/color/index';
import { FlexPaper, GridPaper, APaper, GridBox, FlexBox } from '@styled/index';
import AppBar from '@comp/app-bar/index';
import StatusBar from '@comp/status-bar/index';

interface IProps {}
interface IState {}

const DPaper = styled(GridPaper)(() => ({
  flex: 1,
  gridTemplateRows: '2px 1fr 20px',
}));

const CBox = styled(GridBox)(() => ({
  flex: 1,
  overflow: 'hidden',
  gridTemplateColumns: '50px 1fr',
}));

const DBox = styled(FlexBox)(() => ({
  flexDirection: 'column',
  overflow: 'auto',
  backgroundColor: Grey.dark,
}));

const Dashboard = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper className="dashboard">
      <p className="head100" />
      <CBox>
        <AppBar />
        <DBox>
          <Link to="home">
            <Button variant="contained" color="info">Home</Button>
          </Link>
          <Link to="setting">
            <Button variant="contained" color="error">Setting Page</Button>
          </Link>
          <h1>上海</h1>

          <Outlet />
        </DBox>
      </CBox>
      <StatusBar />
    </DPaper>
  );
};

export default observer(Dashboard);
