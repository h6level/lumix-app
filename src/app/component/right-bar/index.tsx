import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { Grey } from '@tool/color/index';
import { FlexColumnPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(FlexColumnPaper)(() => ({
  borderLeft: `1px solid ${Grey.border}`,
  backgroundColor: Grey.dark,

  '& b': { color: Grey.grey50 },
}));

const RightBar = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <b>5</b>
    </DPaper>
  );
};

export default observer(RightBar);
