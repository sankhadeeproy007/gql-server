import { call, put } from 'redux-saga/effects';

import { FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from '../actions/types';
import { fetchUserData } from '../services/index';

export function* fetchUserRequest(action) {
  try {
    const response = yield call(fetchUserData);
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_USER_FAILURE });
    console.log(e, 'e');
  }
}
