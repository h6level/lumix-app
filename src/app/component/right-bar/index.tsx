import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { Grey } from '@tool/color/index';
import Style from '@tool/style';
import { FlexColumnPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(FlexColumnPaper)(() => ({
  flex: 1,
  borderLeft: Style.border,
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
