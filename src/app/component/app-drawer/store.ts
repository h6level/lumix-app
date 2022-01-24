import { observable, action, runInAction } from 'mobx';

const moDrawer = observable({
  isDrawer: false,
});

const toggleDrawer = action((value: boolean) => {
  moDrawer.isDrawer = value;
});

export default moDrawer;
export { toggleDrawer };
