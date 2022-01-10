import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { Grey } from '@tool/color/index';
import { FlexColumnPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(FlexColumnPaper)(() => ({}));

const Setting = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Link to="/">
        <Button variant="contained" color="primary">Home Page</Button>
      </Link>
      <h1>Setting Page</h1>
    </DPaper>
  );
};

export default observer(Setting);
