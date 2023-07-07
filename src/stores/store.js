import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './users/users.reducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    users: usersReducer
})

export default configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})
