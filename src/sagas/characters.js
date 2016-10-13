import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
  recieveCharacters,
  failCharacters,
  CHARACTERS_FETCH_REQUESTED
} from '../actions/characters';
import { fetchCharacters } from '../api/characters';

export function* getCharacters() {
   try {
      const items = yield call(fetchCharacters);
      yield put(recieveCharacters(items));
   } catch ({ message }) {
      yield put(failCharacters(message));
   }
}

export function* watchForCharactersRequest() {
  yield* takeLatest(CHARACTERS_FETCH_REQUESTED, getCharacters);
}
