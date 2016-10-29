import { watchForReposRequest } from './repos';

export default function* rootSaga() {
  yield [
    watchForReposRequest()
  ];
};
