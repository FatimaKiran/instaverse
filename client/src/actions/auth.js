import { AUTH } from '../constants/actionTypes'
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) =>{
    try{
        //log in the user

        history.push('/');  //after log in push to the '/'
    }catch(err){
        console.log(err);
    }
}

export const signup = (formData, history) => async (dispatch) =>{
    try{
        //singup the user

        history.push('/');  //after signup push to the '/'
    }catch(err){
        console.log(err);
    }
}