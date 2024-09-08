import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFailure } from '../actions/userActions';
import axios from 'axios';
import { User } from '../../constants/types/userTypes';

type FetchUsersRequestAction = {
  type: 'FETCH_USERS_REQUEST';
  payload: number;
};

type FetchUsersSuccessAction = {
  type: 'FETCH_USERS_SUCCESS';
  payload: User[];
};

type FetchUsersFailureAction = {
  type: 'FETCH_USERS_FAILURE';
  payload: string;
};


function* fetchUsersSaga(action: FetchUsersRequestAction): Generator<any, void, any> {
  try {
    const response = yield call(axios.get, `https://dummyjson.com/users`, {
      params: { skip: action.payload, limit: 10 },
    });
    yield put(fetchUsersSuccess(response.data.users));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUsersFailure(error.message));
    } else {
      yield put(fetchUsersFailure('An unknown error occurred'));
    }
  }
}

function* watchFetchUsers() {
  yield takeLatest('FETCH_USERS_REQUEST', fetchUsersSaga);
}

export default watchFetchUsers;
