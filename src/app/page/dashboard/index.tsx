import { useEffect, useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

import './scss/index.scss';
// import Util from '@util/index';
import { Grey } from '@tool/color/index';
import { FlexPaper, GridPaper, APaper, GridBox, FlexBox } from '@styled/index';
import AppBar from '@comp/app-bar/index';
import StatusBar from '@comp/status-bar/index';
import RightBar from '@comp/right-bar/index';
import TopBar from '@comp/top-bar/index';

interface IProps {}
interface IState {}

const DPaper = styled(GridPaper)(({ theme }) => ({
  flex: 1,
  gridTemplateRows: `2px 1fr ${theme.spacing(2.5)}`,
}));

const CBox = styled(GridBox)(({ theme }) => ({
  flex: 1,
  overflow: 'hidden',
  gridTemplateColumns: `${theme.spacing(6)} 1fr ${theme.spacing(2)}`,
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

  const closeWin = () => {
    console.log('close window');
    // Util.closeWin();
  };

  return (
    <DPaper className="dashboard">
      <TopBar />

      <CBox>
        <AppBar />
        <DBox>
          <Button variant="contained" color="success" onClick={closeWin}>Close Window</Button>
          <Link to="home">
            <Button variant="contained" color="info">Home</Button>
          </Link>
          <Link to="setting">
            <Button variant="contained" color="error">Setting Page</Button>
          </Link>
          <h1>上海</h1>

          <Outlet />
        </DBox>
        <RightBar />
      </CBox>
      <StatusBar />
    </DPaper>
  );
};

export default observer(Dashboard);
