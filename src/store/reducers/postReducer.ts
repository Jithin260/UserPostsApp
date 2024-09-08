import { Reducer } from 'redux';
import { User } from '../../constants/types/userTypes';
import { Post } from '../../constants/types/postsTypes';
import { ClearInitialLoadingAction, clearPostsAction, FetchPostsFailureAction, FetchPostsRequestAction, FetchPostsSuccessAction } from '../actions/postAction';

interface PostState {
    posts: Post[];
    loading: boolean;
    hasMore: boolean;
    error: string | null;
    initialLoader: boolean;
}

const initialState: PostState = {
    posts: [],
    loading: false,
    hasMore: true,
    error: null,
    initialLoader: true
};

const postReducer: Reducer<PostState, FetchPostsRequestAction | FetchPostsSuccessAction | FetchPostsFailureAction | clearPostsAction | ClearInitialLoadingAction> = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state,
                initialLoader: false,
                loading: false,
                posts: [...state.posts, ...action.payload],
                hasMore: action.payload.length > 0,
            };
        case 'FETCH_POSTS_FAILURE':
            return {
                ...state,
                loading: false, error: action.payload
            };
        case 'CLEAR_POSTS':
            return { ...state, posts: [] };
        case 'CLEAR_INITIAL_LOADING':
            return { ...state, initialLoader: true };
        default:
            return state;
    }
};

export default postReducer;
