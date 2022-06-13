import * as api from '../api';

//Action creator
 
export const getPosts = () => async(dispatch) =>{
    try{
        console.log("here 💯");
        const { data } = await api.fetchStories(); // fetch data from api
        // dispatch action that is object has type and payload key 
        dispatch({type: 'FETCH_ALL', payload: data}); // instead of returning; 
    }catch(error){
        console.log(error.message);
    }
}   

export const createPost = (post) => async (dispatch) => {
    console.log(post,"post post");
    try {
       const { data } = await api.createPost(post)
       console.log(data,"here is datat");
       dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
       console.log(error);
    }
 }
 
 export const updatePost = (id, post) =>async (dispatch) => {
    try{
      const { data }=  await api.updatePost(id, post);
      dispatch({type:'UPDATE', payload: data})
    }catch(err){
        console.log(err);
    }
 };

 export const deletePost = (id) => async (dispatch) =>{
    try{
        await api.deletePost(id);
        dispatch({type: 'DELETE',payload: id})
    }catch(error){
        console.log(error);
    }
 };

 export const likePost = (id) => async(dispatch) =>{
    try{
        const { data } = await api.likePost(id);
        dispatch({type: 'LIKE', payload: data});
    }catch(err){
        console.log(err);
    }
 }