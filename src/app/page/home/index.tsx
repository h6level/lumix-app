import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { IoGlobeOutline } from 'react-icons/io5';

import './scss/index.scss';
import { FlexColumnPaper } from '@styled/index';

interface IProps {}
interface IState {}

const DPaper = styled(FlexColumnPaper)(() => ({}));

const DStack = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

const Home = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper className="home-page">
      <DStack>
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
        <p><Button variant="contained" color="success">Hello World</Button></p>
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
    </DPaper>
  );
};

export default observer(Home);
