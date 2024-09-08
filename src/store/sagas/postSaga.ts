import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPostsFailure, fetchPostsSuccess } from '../actions/postAction';

export interface FetchPostsRequestAction {
    type: 'FETCH_POSTS_REQUEST';
    payload: { userId: number; skip: number };
}


function* fetchPostsSaga(action: FetchPostsRequestAction): Generator<any, void, any> {
    const { userId, skip } = action.payload;
    try {
        const response = yield call(axios.get, `https://dummyjson.com/users/${userId}/posts`, {
            params: { skip, limit: 10 },
        });
        yield put(fetchPostsSuccess(response.data.posts));
    } catch (error) {
        if (error instanceof Error) {
            yield put(fetchPostsFailure(error.message));
        } else {
            yield put(fetchPostsFailure('An unknown error occurred'));
        }
    }
}

function* watchFetchPosts() {
    yield takeLatest('FETCH_POSTS_REQUEST', fetchPostsSaga);
}

export default watchFetchPosts;
