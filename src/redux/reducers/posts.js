import {
  FETCH_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from "../actions/index";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts;
    case ADD_POST:
      return [...state, action.post];
    case UPDATE_POST:
    case LIKE_POST:
      return state.map((post) =>
        post._id === action.post._id ? action.post : post
      );
    case DELETE_POST:
      return state.filter((post) => post._id !== action.postId);
    default:
      return state;
  }
};

export default postsReducer;
