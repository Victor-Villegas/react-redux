import * as types from './types';

const initialBlogState = {
  loading: false,
  posts: [],
  error: '',
  page: 1,
};

const blogReducer = (state = initialBlogState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: '',
      };
    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload,
      };
    case types.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case types.PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};

export default blogReducer;
