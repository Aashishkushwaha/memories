import * as postsApi from "../../api/postsApi";
import {
  FETCH_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from "../actions/index";

const fetchPostsSuccess = (posts) => {
  return { type: FETCH_POSTS, posts };
};

const addPostSuccess = (post) => {
  return {
    type: ADD_POST,
    post,
  };
};

const updatePostSuccess = (post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};

const likePostSuccess = (post) => {
  return {
    type: LIKE_POST,
    post,
  };
};

const deletePostSuccess = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await postsApi.fetchPost();
      return dispatch(fetchPostsSuccess(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addPost = (post) => {
  return async (dispatch) => {
    try {
      let { data } = await postsApi.addPost(post);
      return dispatch(addPostSuccess(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updatePost = (postId, postData) => {
  return async (dispatch) => {
    try {
      let { data } = await postsApi.updatePost(postId, postData);
      return dispatch(updatePostSuccess(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const likePost = (postId, postData) => {
  return async (dispatch) => {
    try {
      let { data } = await postsApi.likePost(postId, postData);
      return dispatch(likePostSuccess(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      await postsApi.deletePost(postId);
      return dispatch(deletePostSuccess(postId));
    } catch (error) {
      console.log(error.message);
    }
  };
};
