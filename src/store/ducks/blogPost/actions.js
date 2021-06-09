import * as types from './types';

export const fetchPostDataRequest = () => {
  return {
    type: types.FETCH_POST_DATA_REQUEST,
  };
};

export const fetchPostDataSuccess = (posts) => {
  return {
    type: types.FETCH_POST_DATA_SUCCESS,
    payload: posts,
  };
};

export const fetchPostDataFailure = (error) => {
  return {
    type: types.FETCH_POST_DATA_FAILURE,
    payload: error,
  };
};
