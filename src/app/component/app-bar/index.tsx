import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { MdMenu } from 'react-icons/md';

import { Grey } from '@tool/color/index';
import Style from '@tool/style';
import { FlexColumnPaper } from '@styled/index';
import moDrawer, { toggleDrawer } from '@comp/app-drawer/store';

interface IProps {}
interface IState {}

const DPaper = styled(FlexColumnPaper)(() => ({
  flex: 1,
  borderRight: Style.border,
}));

const AppBar = (props: IProps, state: IState) => {
  const navi = useNavigate();
  const { isDrawer } = moDrawer;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <IconButton onClick={() => toggleDrawer(!isDrawer)}>
        <MdMenu />
      </IconButton>
    </DPaper>
  );
};

export default observer(AppBar);
