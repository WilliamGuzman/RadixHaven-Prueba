import axios from 'axios';
import md5 from 'md5';
import { EVENT_CLICK, DATA_BOX, DATA_BOX_SUCCESS, USER_INFO} from '../types';

//Action Click
export function eventClick(click){
    
    return (dispatch) => {
        dispatch( changeClick(click) );
    }
}

//Change Click
const changeClick = click => ({
    type: EVENT_CLICK,
    payload: click
})


//DATA BOX
export function getDataBox(){

    return async (dispatch) => {

        dispatch( getData() )

        try {
            const response = await axios.post('https://radix-haven-backend-demo.herokuapp.com/api/v1/stripe/box');
            //console.log(response.data.result);
            dispatch( getDataSuccess(response.data.result) );
        } catch (error) {
            console.log(error);
        }
    }
}

//GET DATA
const getData = () => ({
    type:DATA_BOX
})

//GET DATA SUCCESS
const getDataSuccess = data => ({
    type: DATA_BOX_SUCCESS,
    payload: data
});

//USER AUTHENTICATE DATA
export function userAuthenticateData(){
    return async ( dispatch ) => {
        try {
            const response = await axios.post('https://radix-haven-backend-demo.herokuapp.com/api/v1/user/information');
            //Hasheamos el email para consultar el gravatar
            const emailHash = md5(response.data.result.mail);
            response.data.result.mail = emailHash;
            dispatch(userInfo(response.data.result));
        } catch (error) {
            console.log(error)
        }
    }
}

const userInfo = user => ({
    type: USER_INFO,
    payload: user
})