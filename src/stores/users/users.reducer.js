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
} from "../actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: "",
  }

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setUserSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    setUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setUserLoading, setUserSuccess, setUserFailure } = usersSlice.actions;

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER_REQUEST:
      case GET_USERS_REQUEST:
      case GET_USER_BY_ID_REQUEST:
      case UPDATE_USER_REQUEST:
      case DELETE_USER_REQUEST:
        return setUserLoading(state);
      case CREATE_USER_SUCCESS:
      case UPDATE_USER_SUCCESS:
        return setUserSuccess(state);
      case GET_USERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          users: action.payload,
          error: null,
        };
      case GET_USER_BY_ID_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: action.payload.data,
          error: null,
        };
      case CREATE_USER_FAILURE:
      case GET_USERS_FAILURE:
      case GET_USER_BY_ID_FAILURE:
      case UPDATE_USER_FAILURE:
      case DELETE_USER_FAILURE:
        return setUserFailure(state, action);
      case DELETE_USER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          users: state.users.filter((user) => user.id !== action.payload),
          error: null,
        };
      default:
        return state;
    }
  };

// export const {  usersReducer } = usersSlice.actions;

// export default usersSlice.reducer;
export default usersReducer;
