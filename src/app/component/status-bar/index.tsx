import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { Blue } from '@tool/color/index';
import { APaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(APaper)(() => ({
  height: '20px',
  backgroundColor: Blue.blue200,

  '& i': { lineHeight: 1 },
}));

const StatusBar = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <i>status bar</i>
    </DPaper>
  );
};

export default observer(StatusBar);
