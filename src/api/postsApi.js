import { BASE_URL } from "./index";
import axios from "axios";

export const fetchPost = async () => {
  return await axios.get(`${BASE_URL}/posts`);
};

export const addPost = async (post) => {
  return await axios.post(`${BASE_URL}/posts`, post);
};

export const updatePost = async (postId, post) => {
  return await axios.patch(`${BASE_URL}/posts/${postId}`, post);
};

export const deletePost = async (postId) => {
  return await axios.delete(`${BASE_URL}/posts/${postId}`);
};

export const likePost = async (postId, post) => {
  return await axios.patch(`${BASE_URL}/posts/${postId}/likepost`, post)
}