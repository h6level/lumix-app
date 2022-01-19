import React from 'react';
import { createPortal } from 'react-dom';

import './scss/app-loading.scss';

interface IProps {}
interface IState {}

const AppPortal = (props: IProps, state: IState) => {
  return createPortal(
    <section className="app-loading">
      <section className="app-spinner">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </section>
    </section>,
    document.getElementById('loading') as HTMLElement,
  );
};

export default AppPortal;
