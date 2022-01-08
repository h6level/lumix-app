import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

import './scss/index.scss';
import { FlexPaper, GridPaper, APaper } from '@styled/index';
import AppBar from '@comp/app-bar/index';
import StatusBar from '@comp/status-bar/index';

interface IProps {}
interface IState {}

const DPaper = styled(GridPaper)(() => ({
  flex: 1,
  gridTemplateRows: '2px 1fr 20px',
}));

const DBox = styled(Box)(() => ({
  flex: 1,
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '50px 1fr',
}));

const Dashboard = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper className="dashboard">
      <p className="head100" />
      <DBox>
        <AppBar />
        <p>
          <Link to="/home">
            <Button variant="contained" color="primary">Hello</Button>
          </Link>
        </p>
      </DBox>
      <StatusBar />
    </DPaper>
  );
};

export default observer(Dashboard);
