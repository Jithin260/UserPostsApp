import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    userState: userReducer,
    postState: postReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
