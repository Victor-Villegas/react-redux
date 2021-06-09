import * as types from './types';

const initialBlogPostState = {
  loading: false,
  postData: [],
  error: '',
};

const blogPostReducer = (state = initialBlogPostState, action) => {
  switch (action.type) {
    case types.FETCH_POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        postData: action.payload,
        error: '',
      };
    case types.FETCH_POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        postData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogPostReducer;
