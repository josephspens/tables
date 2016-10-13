import { watchForCharactersRequest } from './characters';

export default function* rootSaga() {
  yield [
    watchForCharactersRequest()
  ];
};
