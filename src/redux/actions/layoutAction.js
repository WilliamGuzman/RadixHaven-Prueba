import axios from 'axios';
import { EVENT_CLICK, DATA_BOX_SUCCESS} from '../types';

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
        try {
            const response = await axios.post('https://radix-haven-backend-demo.herokuapp.com/api/v1/stripe/box');
            //console.log(response.data.result);
            dispatch( getDataSuccess(response.data.result) );
        } catch (error) {
            console.log(error);
        }
    }
}

//GET DATA SUCCESS
const getDataSuccess = data => ({
    type: DATA_BOX_SUCCESS,
    payload: data
});