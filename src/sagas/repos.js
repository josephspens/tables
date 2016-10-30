import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as Actions from '../actions/repos';
import * as API from '../api/repos';

export function* getRepos({ user, options }) {
   try {
      const { items, pagination } = yield call(API.fetchRepos, user, options);
      yield put(Actions.recieveRepos(items, pagination));
   } catch (error) {
      yield put(Actions.rejectRepos(error));
   }
}

export function* watchForReposRequest() {
  yield* takeLatest(Actions.REQUEST_REPOS, getRepos);
}
