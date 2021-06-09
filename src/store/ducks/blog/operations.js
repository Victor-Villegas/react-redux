import axios from 'axios';

import * as actions from './actions';

export const nextPage = actions.blogNextPage;
export const prevPage = actions.blogPrevPage;

export const fetchPosts = (page) => {
  return (dispatch) => {
    dispatch(actions.fetchPostsRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
      .then((response) => {
        dispatch(actions.fetchPostsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actions.fetchPostsFailure(error.message));
      });
  };
};
