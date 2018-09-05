import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  fetching: false,
  user: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, fetching: true };

    case FETCH_USER_SUCCESS:
      return { ...state, fetching: false, user: action.payload || null };

    case FETCH_USER_FAILURE:
      return { ...state, fetching: false, user: null };

    default:
      return state;
  }
}
