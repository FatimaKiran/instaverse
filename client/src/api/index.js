import axios from "axios";
const url = "http://localhost:9090/posts";


export const fetchStories= () => axios.get(url); 
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);