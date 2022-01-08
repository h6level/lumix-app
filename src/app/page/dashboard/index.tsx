import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import './scss/index.scss';
import { GridPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(GridPaper)(() => ({
  gridTemplateRows: '2px 1fr 1fr',
}));

const Dashboard = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper className="dashboard">
      <b className="head100" />
      <p>
        <Link to="/home">
          <Button variant="contained" color="primary">Hello</Button>
        </Link>
      </p>
    </DPaper>
  );
};

export default observer(Dashboard);
