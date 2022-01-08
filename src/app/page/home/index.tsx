import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';

interface IProps {}
interface IState {}

const Home = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Paper>
      <Stack>
        <Link to="/">
          <Button variant="contained" color="primary">Home Page</Button>
        </Link>
      </Stack>
    </Paper>
  );
};

export default observer(Home);
