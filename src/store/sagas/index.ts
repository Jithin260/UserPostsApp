import { all } from 'redux-saga/effects';
import watchFetchUsers from './userSaga';
import watchFetchPosts from './postSaga';

export default function* rootSaga() {
    yield all([watchFetchUsers(), watchFetchPosts()]);
}
