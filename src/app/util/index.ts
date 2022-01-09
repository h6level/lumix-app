import { app } from 'electron';
import 'path';

const Util = {
  closeWin: () => {
    console.log('app -- ', app);
  },
};

export default Util;
