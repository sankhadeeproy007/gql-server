import { takeLatest } from 'redux-saga/effects';

import * as TYPES from '../actions/types';

import { fetchUserRequest } from './authSaga';
import { handleTokenRequest } from './paymentSaga';

function* rootSaga() {
  yield takeLatest(TYPES.FETCH_USER, fetchUserRequest);
  yield takeLatest(TYPES.HANDLE_TOKEN, handleTokenRequest);
}

export default rootSaga;
