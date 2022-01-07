import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

interface IProps {}
interface IState {}

const Setting = (props: IProps, state: IState) => {
  return (
    <Paper>
      <p><Button variant="contained" color="primary">Hello</Button></p>
      <Link to="setting">
        <Button variant="contained" color="secondary">Home Page</Button>
      </Link>
    </Paper>
  );
};

export default observer(Setting);
