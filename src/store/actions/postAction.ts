import { Action } from 'redux';
import { User } from '../../constants/types/userTypes';
import { Post } from '../../constants/types/postsTypes';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const CLEAR_POSTS = 'CLEAR_POSTS';
export const CLEAR_INITIAL_LOADING = 'CLEAR_INITIAL_LOADING';

export interface FetchPostsRequestAction extends Action<typeof FETCH_POSTS_REQUEST> {
    payload: { userId: number; skip: number }; 
}

export interface FetchPostsSuccessAction extends Action<typeof FETCH_POSTS_SUCCESS> {
    payload: Post[];
}

export interface FetchPostsFailureAction extends Action<typeof FETCH_POSTS_FAILURE> {
    payload: string; 
}

export interface clearPostsAction extends Action<typeof CLEAR_POSTS> {
}

export interface ClearInitialLoadingAction extends Action<typeof CLEAR_INITIAL_LOADING> {
}

export type PostActionTypes = FetchPostsRequestAction | FetchPostsSuccessAction | FetchPostsFailureAction | clearPostsAction | ClearInitialLoadingAction;

export const fetchPostsRequest = (userId: number, skip: number): FetchPostsRequestAction => {
    return {
        type: 'FETCH_POSTS_REQUEST',
        payload: { userId, skip },
    }
};

export const fetchPostsSuccess = (users: Post[]): FetchPostsSuccessAction => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: users,
});

export const fetchPostsFailure = (error: string): FetchPostsFailureAction => ({
    type: 'FETCH_POSTS_FAILURE',
    payload: error,
});

export const clearPosts = (): clearPostsAction => ({
    type: 'CLEAR_POSTS'
});

export const clearInitialLoading = (): ClearInitialLoadingAction => ({
    type: 'CLEAR_INITIAL_LOADING'
});
