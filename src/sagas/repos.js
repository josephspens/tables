import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import * as Actions from '../actions/repos';
import * as API from '../api/repos';

export function* getRepos({ user }) {
   try {
      const repos = yield call(API.fetchRepos, user);
      yield put(Actions.recieveRepos(repos));
   } catch (error) {
      yield put(Actions.rejectRepos(error));
   }
}

export function* watchForReposRequest() {
  yield* takeLatest(Actions.REQUEST_REPOS, getRepos);
}
