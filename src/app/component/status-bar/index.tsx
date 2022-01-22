import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/system';

import { Grey } from '@tool/color/index';
import Style from '@tool/style';
import { FlexCenterPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(FlexCenterPaper)(() => ({
  flex: 1,
  borderTop: Style.border,
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
