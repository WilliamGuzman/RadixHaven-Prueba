import axios from 'axios';
import { GET_USER, GET_USER_SUCCESS, GET_USER_ERROR, SET_IMAGE_USER } from '../types';

//GET ALL USERS
export function getUsersAction(){
    
    return async ( dispatch ) => {

        dispatch( getUsers() );

        try {
            
            const response = await axios.post('https://radix-haven-backend-demo.herokuapp.com/api/v1/user/all-user');
            //console.log(response.data.result);
            dispatch( getUsersSuccess(response.data.result) );

        } catch (error) {
            console.log(error);
            dispatch( getUsersError() );
        }

    }

}

//GET USERS
const getUsers = () =>({
    type: GET_USER
})

//GET USERS SUCCESS
const getUsersSuccess = users => ({
    type: GET_USER_SUCCESS,
    payload: users
})

//GET USERS ERROR
const getUsersError = () => ({
    type: GET_USER_ERROR
})

//GET DATA USER
//amiya06q_c623a@juzab.com
//Email hasheado: 205e460b479e2e5b48aec07710c08d50
export function getUserFavico() {
    return  ( dispatch ) => {

        dispatch( setImageUser('205e460b479e2e5b48aec07710c08d50') )

    }
}

const setImageUser = emailHash => ({
    type: SET_IMAGE_USER,
    payload: emailHash
})