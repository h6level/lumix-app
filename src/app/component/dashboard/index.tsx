import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { APaper } from '@styled/index';

interface IProps {}
interface IState {}

const Dashboard = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <APaper>
      <Button variant="contained" color="primary">Hello</Button>
      <Link to="/">
        <Button variant="contained" color="info">Home Page</Button>
      </Link>
    </APaper>
  );
};

export default observer(Dashboard);
