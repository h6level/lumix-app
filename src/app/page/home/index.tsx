import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { IoGlobeOutline } from 'react-icons/io5';

import './scss/index.scss';
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
    <DPaper className="home-page">
      <Stack>
        <Link to="/">
          <Button variant="contained" color="primary">Home Page</Button>
        </Link>
        <Link to="/setting">
          <Button variant="contained" color="primary">Setting Page</Button>
        </Link>
        <p>
          <b>react-icons</b>: <IoGlobeOutline />
        </p>
      </Stack>
    </DPaper>
  );
};

export default observer(Home);
