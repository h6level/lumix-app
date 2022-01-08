import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { FlexPaper } from '@styled/index';

interface IProps {}
interface IState {}

const AppBar = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <FlexPaper>
      <Button variant="contained" color="primary">Hello</Button>
    </FlexPaper>
  );
};

export default observer(AppBar);
