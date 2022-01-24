import { observable, action, runInAction } from 'mobx';

const moDial = observable({
  isDial: true,
});

const toggleDial = action((value: boolean) => {
  moDial.isDial = value;
});

export default moDial;
export { toggleDial };
