import { observable, action, runInAction } from 'mobx';

const moLock = observable({
  isLock: false,
});

const toggleLock = action((value: boolean) => {
  moLock.isLock = value;
});

export default moLock;
export { toggleLock };
