import axios from 'axios';

import * as actions from './actions';

export const fetchPostData = (id) => {
  return (dispatch) => {
    dispatch(actions.fetchPostDataRequest());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        dispatch(actions.fetchPostDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actions.fetchPostDataFailure(error.message));
      });
  };
};
