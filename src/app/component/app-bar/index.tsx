import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { Orange } from '@tool/color/index';
import { FlexPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(FlexPaper)(() => ({
  flex: 1,
  backgroundColor: Orange.orange200,
}));

const AppBar = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <i>app bar</i>
    </DPaper>
  );
};

export default observer(AppBar);
