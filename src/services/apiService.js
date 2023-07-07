import _axios from "axios";
import { APIError } from "../libs/errors";
import config from "../../config";

export const baseURL = config.REACT_APP_API_URL;
// export const baseURL = "http://119.59.124.189:5000/api"
const axios = _axios.create({
  withCredentials: true,
  baseURL,
});

/**
 * @type {import("axios").AxiosError}
 * @type {import("axios").AxiosRequestConfig}
 * @type {import("axios").AxiosResponse}
 */

/**
 *
 * @param {AxiosError} error
 */
const handleError = (error) => {
  if (error.response?.data?.success !== undefined) {
    const res = error.response.data;
    throw new APIError(res.status, res.message, res.data);
  } else {
    throw error;
  }
};

/**
 *
 * @param {AxiosRequestConfig} option
 * @returns {AxiosRequestConfig}
 */
const getConfig = (option) => {
  return {
    ...option,
    headers: {
      ...option?.headers,
    },
  };
};

/**
 * @param {string} url
 * @param {AxiosRequestConfig} config
 * @returns {Promise<AxiosResponse>}
 */
const get = async (url, config) => {
  try {
    return await axios.get(url, getConfig(config));
  } catch (error) {
    handleError(error);
  }
};

/**
 * @param {string} url
 * @param {*} data
 * @param {AxiosRequestConfig} config
 * @returns {Promise<AxiosResponse>}
 */
const post = async (url, data, config) => {
  try {
    return await axios.post(url, data, getConfig(config));
  } catch (error) {
    handleError(error);
  }
};

/**
 * @param {string} url
 * @param {*} data
 * @param {AxiosRequestConfig} config
 * @returns {Promise<AxiosResponse>}
 */
const put = async (url, data, config) => {
  try {
    return await axios.put(url, data, getConfig(config));
  } catch (error) {
    handleError(error);
  }
};

/**
 * @param {string} url
 * @param {*} data
 * @param {AxiosRequestConfig} config
 * @returns {Promise<AxiosResponse>}
 */
const patch = async (url, data, config) => {
  try {
    return await axios.patch(url, data, getConfig(config));
  } catch (error) {
    handleError(error);
  }
};

/**
 * @param {string} url
 * @param {AxiosRequestConfig} config
 * @returns {Promise<AxiosResponse>}
 */
const _delete = async (url, config) => {
  try {
    return await axios.delete(url, getConfig(config));
  } catch (error) {
    handleError(error);
  }
};
export default { get, post, put, patch, delete: _delete };
