import * as types from './types';

export const fetchPostsRequest = () => {
  return {
    type: types.FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: types.FETCH_POSTS_FAILURE,
    payload: error,
  };
};

export const blogNextPage = (page) => {
  return {
    type: types.NEXT_PAGE,
    payload: page,
  };
};

export const blogPrevPage = (page) => {
  return {
    type: types.PREV_PAGE,
    payload: page,
  };
};
