import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { IoGlobeOutline } from 'react-icons/io5';

import './scss/index.scss';
import { FlexColumnPaper } from '@styled/index';
import AppLock from '@con/app-lock';
import moLock, { toggleLock } from '@con/store/app-lock';

interface IProps {}
interface IState {}

const DPaper = styled(FlexColumnPaper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const DStack = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const LockStack = styled(Stack)(() => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Home = (props: IProps, state: IState) => {
  const navi = useNavigate();
  const { isLock } = moLock;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper className="home-page">
      <DStack>
        <Typography variant="h1"
          className="animate__animated animate__bounceIn">
          我愿化为一道光，穿越银河去旅行...
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
            onClick={() => toggleLock(true)}>Lock
          </Button>
        </p>
        <p>--- 华丽的分割线 contained ---</p>
        <p><Button variant="contained" color="error">Hello World</Button></p>
        <p>--- 华丽的分割线 contained ---</p>
        <p><Button variant="contained" color="info">Hello World</Button></p>
        <p>--- 华丽的分割线 contained ---</p>
        <p><Button variant="contained" color="warning">Hello World</Button></p>
        <p>--- 华丽的分割线 disabled ---</p>
        <p><Button disabled={true}>Hello World</Button></p>
        <p>--- 华丽的分割线 dashed ---</p>
        <p><Button variant="dashed" color="primary">Hello World</Button></p>
        <p>--- 华丽的分割线 dashed ---</p>
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

      {isLock ? (
        <AppLock>
          <LockStack>
            <Button variant="contained" color="warning"
              onClick={() => toggleLock(false)}>unLock
            </Button>
          </LockStack>
        </AppLock>
      ) : null}
    </DPaper>
  );
};

export default observer(Home);
