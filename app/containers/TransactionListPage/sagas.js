import { take, call, put, select, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { INIT, PAGE } from './constants';
import { listLoaded, paginationLoaded } from './actions';
import request from 'utils/request';
import { toJS } from 'immutable';

const VARS = {
	API_BASE_URL: 'http://localhost:3008',
}

function* selectUrlParams() {
  const stateJS = (yield select()).get('transaction').toJS();
  return {
    currentPage: stateJS.currentPage||0,
  }
}

export function* getList() {
  const urlParams = yield selectUrlParams();
  const requestURL = `${VARS.API_BASE_URL}/api/transaction?page=${urlParams.currentPage}`;
  try {
    const response = yield call(request, requestURL);
    yield put(listLoaded(response.data));
    yield put(paginationLoaded(response.pagination));
  } catch (err) {
    console.log(err);
  }
}

export function* listData() {
  const watcher = yield takeLatest(INIT, getList);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* pageData() {
  const watcher = yield takeLatest(PAGE, getList);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  listData,
  pageData,
];