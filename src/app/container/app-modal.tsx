import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children: ReactNode;
}
interface IState {}

const AppPortal = (props: IProps, state: IState) => {
  const { children } = props;

  return createPortal(
    <>{children}</>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default AppPortal;
