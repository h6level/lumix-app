import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { IoGlobeOutline } from 'react-icons/io5';

import './scss/index.scss';
import { FlexPaper } from '@styled/index';
import moLock, { toggleLock } from '@con/store/app-lock';
import { toggleLoading } from '@con/store/app-loading';
import AppDrawer from '@comp/app-drawer/index';
import moDrawer from '@comp/app-drawer/store';

interface IProps {}
interface IState {}

const DPaper = styled(FlexPaper)(({ theme }) => ({}));

const DStack = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const Home = (props: IProps, state: IState) => {
  const navi = useNavigate();
  const { isLock } = moLock;
  const { isDrawer } = moDrawer;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper className="home-page">
      {isDrawer ? <AppDrawer /> : null}

      <DStack>
        <Typography variant="h1"
          className="animate__animated animate__bounceIn">积跬步，以致千里...
        </Typography>
        <p>--- 华丽的分割线 contained ---</p>
        <Link to="/">
          <Button variant="contained" color="primary">Home Page</Button>
        </Link>
        <p>--- 华丽的分割线 contained ---</p>
        <Link to="/setting">
          <Button variant="contained" color="secondary">Setting Page</Button>
        </Link>
        <p><b>react-icons</b>: <IoGlobeOutline /></p>
        <p>--- 华丽的分割线 contained ---</p>
        <p>
          <Button variant="contained" color="success"
            onClick={() => toggleLock(true)}>Toggle Lock
          </Button>
        </p>
        <p>--- 华丽的分割线 contained ---</p>
        <p>
          <Button variant="contained" color="error"
            onClick={() => toggleLoading(true)}>Toggle Loading
          </Button>
        </p>
        <Typography variant="body1">--- body1 华丽的分割线 contained ---</Typography>
        <p><Button variant="contained" color="info">Hello World</Button></p>
        <Typography variant="body2">--- body2 华丽的分割线 contained ---</Typography>
        <p><Button variant="contained" color="warning">Hello World</Button></p>
        <Typography variant="caption">--- caption 华丽的分割线 disabled ---</Typography>
        <p><Button disabled={true}>Hello World</Button></p>
        <Typography variant="subtitle1">--- subtitle1 华丽的分割线 dashed ---</Typography>
        <p><Button variant="dashed" color="primary">Hello World</Button></p>
        <Typography variant="subtitle2">--- subtitle2 华丽的分割线 dashed ---</Typography>
        <p><Button variant="dashed" color="secondary">Hello World</Button></p>
        <p>--- 华丽的分割线 dashed ---</p>
        <p><Button variant="dashed" color="error">Hello World</Button></p>
        <p>--- 华丽的分割线 dashed ---</p>
        <p><Button variant="dashed" color="info">Hello World</Button></p>
        <p>--- 华丽的分割线 dashed ---</p>
        <p><Button variant="dashed" color="warning">Hello World</Button></p>
        <p>--- 华丽的分割线 dashed ---</p>
        <p><Button variant="dashed" color="success">Hello World</Button></p>
        <p>--- 华丽的分割线 outlined ---</p>
        <p><Button variant="outlined" color="primary">Hello World</Button></p>
        <p>--- 华丽的分割线 outlined ---</p>
        <p><Button variant="outlined" color="secondary">Hello World</Button></p>
        <p>--- 华丽的分割线 outlined ---</p>
        <p><Button variant="outlined" color="info">Hello World</Button></p>
        <p>--- 华丽的分割线 outlined ---</p>
        <p><Button variant="outlined" color="error">Hello World</Button></p>
        <p>--- 华丽的分割线 outlined ---</p>
        <p><Button variant="outlined" color="warning">Hello World</Button></p>
        <p>--- 华丽的分割线 outlined ---</p>
        <p><Button variant="outlined" color="success">Hello World</Button></p>
        <p>--- 华丽的分割线 text ---</p>
        <p><Button color="primary">Hello World</Button></p>
        <p>--- 华丽的分割线 text ---</p>
        <p><Button color="secondary">Hello World</Button></p>
        <p>--- 华丽的分割线 text ---</p>
        <p><Button color="success">Hello World</Button></p>
        <p>--- 华丽的分割线 text ---</p>
        <p><Button color="info">Hello World</Button></p>
        <p>--- 华丽的分割线 text ---</p>
        <p><Button color="warning">Hello World</Button></p>
        <p>--- 华丽的分割线 text ---</p>
        <p><Button color="error">Hello World</Button></p>
        <p>--- 华丽的分割线 ---</p>
      </DStack>
    </DPaper>
  );
};

export default observer(Home);
