import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)(() => ({}));

const Setting = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Stack>
        <Button variant="contained" color="primary">Hello</Button>
      </Stack>
      <Link to="setting">
        <Button variant="contained" color="secondary">Home Page</Button>
      </Link>
    </DPaper>
  );
};

export default observer(Setting);
