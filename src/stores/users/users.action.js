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

import userService from "../../services/usersService";

export const createUser = ({
  firstName,
  lastName,
  gender,
  birthDate,
  image,
}) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });

    try {
      const response = await userService.create({
        firstName,
        lastName,
        gender,
        birthDate,
        image,
      });
      dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: CREATE_USER_FAILURE, payload: error.message });
    }
  };
};

export const getUsers = () => {
  return async (dispatch, getState) => {
    dispatch({ type: GET_USERS_REQUEST });

    try {
      const response = await userService.get();
      dispatch({ type: GET_USERS_SUCCESS, payload: response.data.data });

    } catch (error) {
      dispatch({ type: GET_USERS_FAILURE, payload: error.message });
    }
  };
};

export const getUserById = (userId) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_BY_ID_REQUEST });

    try {
      const response = await userService.getById(userId);
      dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_USER_BY_ID_FAILURE, payload: error.message });
    }
  };
};

export const updateUser = (userId, updatedData) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });

    try {
      const response = await userService.update(userId, updatedData);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });

    try {
      await userService._delete(userId);
      dispatch({ type: DELETE_USER_SUCCESS, payload: userId });
    } catch (error) {
      dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
    }
  };
};
