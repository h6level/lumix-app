import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@mui/material';
import { styled } from '@mui/system';

import './scss/index.scss';
import { Grey } from '@tool/color/index';
import { GridPaper, GridBox, FlexBox } from '@styled/index';
import AppBar from '@comp/app-bar/index';
import StatusBar from '@comp/status-bar/index';
import RightBar from '@comp/right-bar/index';
import TopBar from '@comp/top-bar/index';
import AppLoading from '@con/app-loading';
import AppLock from '@con/app-lock';
import moLoading from '@con/store/app-loading';
import moLock from '@con/store/app-lock';

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
}));

const Dashboard = (props: IProps, state: IState) => {
  const navi = useNavigate();
  const { isLoading } = moLoading;
  const { isLock } = moLock;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper className="dashboard">
      <TopBar />

      <CBox>
        <AppBar />
        <DBox>
          <Outlet />
        </DBox>
        <RightBar />
      </CBox>

      <StatusBar />

      {isLoading ? <AppLoading /> : null}
      {isLock ? <AppLock /> : null}
    </DPaper>
  );
};

export default observer(Dashboard);
