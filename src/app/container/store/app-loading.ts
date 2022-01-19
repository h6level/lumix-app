import { observable, action, runInAction } from 'mobx';

const moLoading = observable({
  isLoading: false,
});

const toggleLoading = action((value: boolean) => {
  moLoading.isLoading = value;

  setTimeout(() => {
    runInAction(() => { moLoading.isLoading = false; });
  }, 3000);
});

export default moLoading;
export { toggleLoading };
