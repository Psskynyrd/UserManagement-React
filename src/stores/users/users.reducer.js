import { createSlice } from "@reduxjs/toolkit";

import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USER_BY_ID_REQUEST,
    GET_USER_BY_ID_SUCCESS,
    GET_USER_BY_ID_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from '../actionTypes';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: {
            firstName: '',
            lastName: '',
            gender: '',
            birthDay: '',
            image: ''
        },
        loading: false,
        error: ''
    },
    reducers: {
        [CREATE_USER_REQUEST]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [CREATE_USER_SUCCESS]: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        [CREATE_USER_FAILURE]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [GET_USERS_REQUEST]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [GET_USERS_SUCCESS]: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        },
        [GET_USERS_FAILURE]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [GET_USER_BY_ID_REQUEST]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [GET_USER_BY_ID_SUCCESS]: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        },
        [GET_USER_BY_ID_FAILURE]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [UPDATE_USER_REQUEST]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [UPDATE_USER_SUCCESS]: (state) => {
            state.isLoading = false;
            state.error = null;
        },
        [UPDATE_USER_FAILURE]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [DELETE_USER_REQUEST]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [DELETE_USER_SUCCESS]: (state, action) => {
            state.isLoading = false;
            state.users = state.users.filter((user) => user.id !== action.payload);
            state.error = null;
        },
        [DELETE_USER_FAILURE]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
})

export const { usersReducer } = usersSlice.actions

export default usersSlice.reducer