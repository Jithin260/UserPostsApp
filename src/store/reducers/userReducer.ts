import { Reducer } from 'redux';
import { FetchUsersFailureAction, FetchUsersRequestAction, FetchUsersSuccessAction } from '../actions/userActions';
import { User } from '../../constants/types/userTypes';

interface UserState {
    users: User[];
    loading: boolean;
    hasMore: boolean;
    error: string | null;
    initialLoader: boolean;
}

const initialState: UserState = {
    users: [],
    loading: false,
    hasMore: true,
    error: null,
    initialLoader: true
};

const userReducer: Reducer<UserState, FetchUsersRequestAction | FetchUsersSuccessAction | FetchUsersFailureAction> = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                initialLoader: false,
                loading: false,
                users: [...state.users, ...action.payload],
                hasMore: action.payload.length > 0,
            };
        case 'FETCH_USERS_FAILURE':
            return { ...state,initialLoader: false, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
