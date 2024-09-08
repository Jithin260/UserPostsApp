import { Action } from 'redux';
import { User } from '../../constants/types/userTypes';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const ON_INITIAL_LOADING = 'ON_INITIAL_LOADING';


export interface FetchUsersRequestAction extends Action<typeof FETCH_USERS_REQUEST> {
    payload: number; 
}

export interface FetchUsersSuccessAction extends Action<typeof FETCH_USERS_SUCCESS> {
    payload: User[];
}

export interface FetchUsersFailureAction extends Action<typeof FETCH_USERS_FAILURE> {
    payload: string; 
}

export interface OnInitialLoadingAction extends Action<typeof ON_INITIAL_LOADING> {
    payload: boolean;
}

export type UserActionTypes = FetchUsersRequestAction | FetchUsersSuccessAction | FetchUsersFailureAction | OnInitialLoadingAction;

export const fetchUsersRequest = (skip: number): FetchUsersRequestAction => ({
    type: 'FETCH_USERS_REQUEST',
    payload: skip,
});

export const fetchUsersSuccess = (users: User[]): FetchUsersSuccessAction => ({
    type: 'FETCH_USERS_SUCCESS',
    payload: users,
});

export const fetchUsersFailure = (error: string): FetchUsersFailureAction => ({
    type: 'FETCH_USERS_FAILURE',
    payload: error,
});

export const onInitialLoading = (initialLoader: boolean): OnInitialLoadingAction => ({
    type: 'ON_INITIAL_LOADING',
    payload: initialLoader,
});
