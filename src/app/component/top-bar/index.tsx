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

const DPaper = styled(FlexCenterPaper)(({ theme }) => ({
  flex: 1,
  borderBottom: Style.border,
}));

const TopBar = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>lumix-app</DPaper>
  );
};

export default observer(TopBar);
