import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';

import { FlexColumnPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(FlexColumnPaper)(() => ({}));

const Home = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Stack>
        <Link to="/home">
          <Button variant="contained" color="primary">Home Page</Button>
        </Link>
        <Link to="/setting">
          <Button variant="contained" color="primary">Setting Page</Button>
        </Link>
      </Stack>
    </DPaper>
  );
};

export default observer(Home);
