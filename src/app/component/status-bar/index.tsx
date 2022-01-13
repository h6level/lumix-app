import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { Grey } from '@tool/color/index';
import { FlexPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(FlexPaper)(() => ({
  height: '20px',
  borderTop: `1px solid ${Grey.border}`,
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
